from django.contrib import admin
from .models import Species, MiRNA, Gene, MiRNATarget, ExpressionData, Pathway, SearchLog

@admin.register(Species)
class SpeciesAdmin(admin.ModelAdmin):
    list_display = ['name', 'scientific_name', 'taxonomy_id']
    search_fields = ['name', 'scientific_name']
    ordering = ['name']

@admin.register(MiRNA)
class MiRNAAdmin(admin.ModelAdmin):
    list_display = ['name', 'species', 'family', 'chromosome', 'target_count']
    list_filter = ['species', 'family', 'chromosome']
    search_fields = ['name', 'sequence', 'description']
    readonly_fields = ['target_count']
    ordering = ['name']

@admin.register(Gene)
class GeneAdmin(admin.ModelAdmin):
    list_display = ['name', 'symbol', 'species', 'gene_type', 'mirna_count']
    list_filter = ['species', 'gene_type']
    search_fields = ['name', 'symbol', 'description']
    readonly_fields = ['mirna_count']
    ordering = ['name']

@admin.register(MiRNATarget)
class MiRNATargetAdmin(admin.ModelAdmin):
    list_display = ['mirna', 'gene', 'prediction_score', 'experimental_validation']
    list_filter = ['experimental_validation', 'mirna__species', 'gene__species']
    search_fields = ['mirna__name', 'gene__name']
    ordering = ['-prediction_score']

@admin.register(ExpressionData)
class ExpressionDataAdmin(admin.ModelAdmin):
    list_display = ['mirna', 'tissue', 'condition', 'expression_level', 'expression_unit']
    list_filter = ['tissue', 'condition', 'expression_unit', 'mirna__species']
    search_fields = ['mirna__name', 'tissue', 'condition']
    ordering = ['-expression_level']

@admin.register(Pathway)
class PathwayAdmin(admin.ModelAdmin):
    list_display = ['name', 'pathway_id', 'source_database']
    list_filter = ['source_database']
    search_fields = ['name', 'pathway_id', 'description']
    filter_horizontal = ['genes']
    ordering = ['name']

@admin.register(SearchLog)
class SearchLogAdmin(admin.ModelAdmin):
    list_display = ['query', 'search_type', 'results_count', 'ip_address', 'created_at']
    list_filter = ['search_type', 'created_at']
    search_fields = ['query', 'ip_address']
    readonly_fields = ['created_at']
    ordering = ['-created_at']
