from django.shortcuts import render
from django.http import JsonResponse
from django.db.models import Q
from django.core.paginator import Paginator
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
import json

from .models import MiRNA, Gene, Species, MiRNATarget, ExpressionData, Pathway, SearchLog

def test_view(request):
    """Simple test view"""
    stats = {
        'total_mirnas': MiRNA.objects.count(),
        'total_genes': Gene.objects.count(),
        'total_species': Species.objects.count(),
        'total_targets': MiRNATarget.objects.count(),
    }
    return render(request, 'test.html', {'stats': stats})

def home_view(request):
    """Home page view"""
    # Get some statistics for the home page
    stats = {
        'total_mirnas': MiRNA.objects.count(),
        'total_genes': Gene.objects.count(),
        'total_species': Species.objects.count(),
        'total_targets': MiRNATarget.objects.count(),
    }
    
    return render(request, 'home.html', {'stats': stats})

def search_view(request):
    """Search functionality"""
    query = request.GET.get('q', '')
    search_type = request.GET.get('type', 'mirna')
    
    if not query:
        return render(request, 'search.html')
    
    # Log the search
    SearchLog.objects.create(
        query=query,
        search_type=search_type,
        ip_address=request.META.get('REMOTE_ADDR'),
        user_agent=request.META.get('HTTP_USER_AGENT', '')
    )
    
    results = []
    
    if search_type == 'mirna':
        results = MiRNA.objects.filter(
            Q(name__icontains=query) |
            Q(sequence__icontains=query) |
            Q(description__icontains=query)
        )[:50]
    elif search_type == 'gene':
        results = Gene.objects.filter(
            Q(name__icontains=query) |
            Q(symbol__icontains=query) |
            Q(description__icontains=query)
        )[:50]
    elif search_type == 'sequence':
        results = MiRNA.objects.filter(sequence__icontains=query)[:50]
    elif search_type == 'pathway':
        results = Pathway.objects.filter(
            Q(name__icontains=query) |
            Q(description__icontains=query)
        )[:50]
    
    # Update search log with results count
    SearchLog.objects.filter(
        query=query,
        search_type=search_type
    ).update(results_count=len(results))
    
    context = {
        'query': query,
        'search_type': search_type,
        'results': results,
        'results_count': len(results)
    }
    
    return render(request, 'search.html', context)

def browse_view(request):
    """Browse database view"""
    species = Species.objects.all()
    mirnas = MiRNA.objects.select_related('species').order_by('name')[:100]
    genes = Gene.objects.select_related('species').order_by('name')[:100]
    
    context = {
        'species': species,
        'mirnas': mirnas,
        'genes': genes
    }
    
    return render(request, 'browse.html', context)

def download_view(request):
    """Download data view"""
    return render(request, 'download.html')

def api_view(request):
    """API documentation view"""
    return render(request, 'api.html')

def help_view(request):
    """Help and documentation view"""
    return render(request, 'help.html')

# API Views
@method_decorator(csrf_exempt, name='dispatch')
class SearchAPIView(View):
    """API endpoint for search functionality"""
    
    def post(self, request):
        try:
            data = json.loads(request.body)
            query = data.get('query', '')
            search_type = data.get('type', 'mirna')
            
            if not query:
                return JsonResponse({'error': 'Query is required'}, status=400)
            
            results = []
            
            if search_type == 'mirna':
                mirnas = MiRNA.objects.filter(
                    Q(name__icontains=query) |
                    Q(sequence__icontains=query)
                )[:20]
                results = [{
                    'name': mirna.name,
                    'sequence': mirna.sequence,
                    'species': mirna.species.name,
                    'target_count': mirna.target_count
                } for mirna in mirnas]
                
            elif search_type == 'gene':
                genes = Gene.objects.filter(
                    Q(name__icontains=query) |
                    Q(symbol__icontains=query)
                )[:20]
                results = [{
                    'name': gene.name,
                    'symbol': gene.symbol,
                    'species': gene.species.name,
                    'mirna_count': gene.mirna_count
                } for gene in genes]
            
            return JsonResponse({
                'query': query,
                'type': search_type,
                'results': results,
                'count': len(results)
            })
            
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

class MiRNADetailView(View):
    """Detailed view for a specific miRNA"""
    
    def get(self, request, mirna_name):
        try:
            mirna = MiRNA.objects.select_related('species').prefetch_related('targets__gene').get(name=mirna_name)
            
            # Get expression data
            expression_data = ExpressionData.objects.filter(mirna=mirna)[:10]
            
            # Get target genes
            targets = MiRNATarget.objects.filter(mirna=mirna).select_related('gene')[:20]
            
            context = {
                'mirna': mirna,
                'expression_data': expression_data,
                'targets': targets
            }
            
            return render(request, 'mirna_detail.html', context)
            
        except MiRNA.DoesNotExist:
            return render(request, '404.html', status=404)

class GeneDetailView(View):
    """Detailed view for a specific gene"""
    
    def get(self, request, gene_name):
        try:
            gene = Gene.objects.select_related('species').prefetch_related('targeted_by__mirna').get(name=gene_name)
            
            # Get targeting miRNAs
            targeting_mirnas = MiRNATarget.objects.filter(gene=gene).select_related('mirna')[:20]
            
            # Get pathways
            pathways = gene.pathways.all()[:10]
            
            context = {
                'gene': gene,
                'targeting_mirnas': targeting_mirnas,
                'pathways': pathways
            }
            
            return render(request, 'gene_detail.html', context)
            
        except Gene.DoesNotExist:
            return render(request, '404.html', status=404)

@method_decorator(csrf_exempt, name='dispatch')
class ContactFormView(View):
    """Handle contact form submissions"""
    
    def post(self, request):
        try:
            data = json.loads(request.body)
            
            # Extract form data
            name = data.get('name', '').strip()
            email = data.get('email', '').strip()
            subject = data.get('subject', '').strip()
            tool = data.get('tool', '').strip()
            message = data.get('message', '').strip()
            
            # Basic validation
            if not all([name, email, subject, message]):
                return JsonResponse({
                    'success': False,
                    'error': 'All required fields must be filled'
                }, status=400)
            
            # Prepare email content
            email_subject = f"Contact Form: {subject}"
            email_body = f"""
New contact form submission from miRGen v5 website:

Name: {name}
Email: {email}
Subject: {subject}
Tool/Database: {tool if tool else 'Not specified'}

Message:
{message}

---
This message was sent from the miRGen v5 contact form.
            """.strip()
            
            # Send email (you'll need to configure email settings in settings.py)
            try:
                send_mail(
                    subject=email_subject,
                    message=email_body,
                    from_email=email,  # Use the sender's email
                    recipient_list=['dianalabgr@gmail.com'],
                    fail_silently=False,
                )
                
                return JsonResponse({
                    'success': True,
                    'message': 'Message sent successfully'
                })
                
            except Exception as e:
                print(f"Email sending error: {e}")
                return JsonResponse({
                    'success': False,
                    'error': 'Failed to send email. Please try again later.'
                }, status=500)
                
        except json.JSONDecodeError:
            return JsonResponse({
                'success': False,
                'error': 'Invalid JSON data'
            }, status=400)
        except Exception as e:
            return JsonResponse({
                'success': False,
                'error': 'An unexpected error occurred'
            }, status=500)

