from django.db import models
from django.core.validators import RegexValidator

class Species(models.Model):
    """Model for different species in the database"""
    name = models.CharField(max_length=100, unique=True)
    scientific_name = models.CharField(max_length=200)
    taxonomy_id = models.IntegerField(unique=True)
    description = models.TextField(blank=True)
    
    class Meta:
        verbose_name_plural = "Species"
        ordering = ['name']
    
    def __str__(self):
        return self.name

class MiRNA(models.Model):
    """Model for microRNA entries"""
    name = models.CharField(max_length=50, unique=True)
    sequence = models.TextField()
    species = models.ForeignKey(Species, on_delete=models.CASCADE, related_name='mirnas')
    family = models.CharField(max_length=100, blank=True)
    chromosome = models.CharField(max_length=20, blank=True)
    strand = models.CharField(max_length=1, choices=[('+', 'Plus'), ('-', 'Minus')], blank=True)
    start_position = models.IntegerField(null=True, blank=True)
    end_position = models.IntegerField(null=True, blank=True)
    precursor_sequence = models.TextField(blank=True)
    mature_sequence = models.TextField(blank=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = "miRNA"
        verbose_name_plural = "miRNAs"
        ordering = ['name']
    
    def __str__(self):
        return self.name
    
    @property
    def target_count(self):
        return self.targets.count()

class Gene(models.Model):
    """Model for target genes"""
    name = models.CharField(max_length=100, unique=True)
    symbol = models.CharField(max_length=20, blank=True)
    species = models.ForeignKey(Species, on_delete=models.CASCADE, related_name='genes')
    chromosome = models.CharField(max_length=20, blank=True)
    start_position = models.IntegerField(null=True, blank=True)
    end_position = models.IntegerField(null=True, blank=True)
    description = models.TextField(blank=True)
    gene_type = models.CharField(max_length=50, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['name']
    
    def __str__(self):
        return self.name
    
    @property
    def mirna_count(self):
        return self.targeted_by.count()

class MiRNATarget(models.Model):
    """Model for miRNA-target gene relationships"""
    mirna = models.ForeignKey(MiRNA, on_delete=models.CASCADE, related_name='targets')
    gene = models.ForeignKey(Gene, on_delete=models.CASCADE, related_name='targeted_by')
    prediction_score = models.FloatField(null=True, blank=True)
    binding_sites = models.TextField(blank=True)
    experimental_validation = models.BooleanField(default=False)
    validation_method = models.CharField(max_length=100, blank=True)
    reference = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ['mirna', 'gene']
        ordering = ['-prediction_score']
    
    def __str__(self):
        return f"{self.mirna.name} -> {self.gene.name}"

class ExpressionData(models.Model):
    """Model for miRNA expression data"""
    mirna = models.ForeignKey(MiRNA, on_delete=models.CASCADE, related_name='expression_data')
    tissue = models.CharField(max_length=100)
    condition = models.CharField(max_length=100, blank=True)
    expression_level = models.FloatField()
    expression_unit = models.CharField(max_length=20, default='TPM')
    sample_count = models.IntegerField(default=1)
    study_reference = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ['mirna', 'tissue', 'condition']
        ordering = ['-expression_level']
    
    def __str__(self):
        return f"{self.mirna.name} in {self.tissue}: {self.expression_level}"

class Pathway(models.Model):
    """Model for biological pathways"""
    name = models.CharField(max_length=200, unique=True)
    pathway_id = models.CharField(max_length=50, unique=True)
    description = models.TextField(blank=True)
    source_database = models.CharField(max_length=100, blank=True)
    genes = models.ManyToManyField(Gene, related_name='pathways')
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['name']
    
    def __str__(self):
        return self.name

class SearchLog(models.Model):
    """Model for tracking user searches"""
    query = models.CharField(max_length=500)
    search_type = models.CharField(max_length=20, choices=[
        ('mirna', 'miRNA Name'),
        ('gene', 'Target Gene'),
        ('sequence', 'Sequence'),
        ('pathway', 'Pathway')
    ])
    results_count = models.IntegerField(default=0)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    user_agent = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.search_type}: {self.query[:50]}"