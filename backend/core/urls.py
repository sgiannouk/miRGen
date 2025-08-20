from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('test/', views.test_view, name='test'),
    path('genome-browser-test/', views.genome_browser_test_view, name='genome_browser_test'),
    path('igv-simple-test/', views.igv_simple_test_view, name='igv_simple_test'),
    path('test-mirna-detail/', views.test_mirna_detail_view, name='test_mirna_detail'),
    path('igv-minimal-test/', views.igv_minimal_test_view, name='igv_minimal_test'),
    path('search/', views.search_view, name='search'),
    path('browse/', views.browse_view, name='browse'),
    # path('download/', views.download_view, name='download'),  # Disabled - downloads now happen inline
    path('api/', views.api_view, name='api'),
    path('help/', views.help_view, name='help'),
    
    # API endpoints
    path('api/search/', views.SearchAPIView.as_view(), name='api_search'),
    path('api/contact/', views.ContactFormView.as_view(), name='contact_form'),
    
    # Detail views
    path('mirna/<str:mirna_name>/', views.MiRNADetailView.as_view(), name='mirna_detail'),
    path('gene/<str:gene_name>/', views.GeneDetailView.as_view(), name='gene_detail'),
]