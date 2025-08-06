// Home Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Home Page...');
    initializeHomePage();
});

// miRNA Lists (User will fill in the complete lists)
const miRNA_LISTS = {
    human: [
        'hsa-mir-99b',
        'hsa-let-7a-1',
        'hsa-let-7a-2',
        'hsa-let-7a-3',
        'hsa-let-7a-5p',
        'hsa-let-7a-3p'
        // User will add the complete human miRNA list here
    ],
    mouse: [
        'mmu-let-7a-1',
        'mmu-mir-9b-3',
        'mmu-let-7a-2',
        'mmu-let-7a-3',
        'mmu-let-7a-5p',
        'mmu-let-7a-3p'
        // User will add the complete mouse miRNA list here
    ]
};

// Organism-version mapping (removed third mouse option)
const ORGANISM_VERSION_MAP = {
    'human_GRCh38': { organism: 'human', version: 'GRCh38' },
    'mouse_GRCm39': { organism: 'mouse', version: 'GRCm39' }
};

// Store original texts for all options (removed third mouse option)
const ORIGINAL_TEXTS = {
    'human_GRCh38': 'Human (GRCh38/hg38)',
    'mouse_GRCm39': 'Mouse (GRCm39/mm39)'
};

// Home Page Initialization
function initializeHomePage() {
    initializeSearchForm();
    initializeOrganismSelection();
    initializeAutocomplete();
    initializeExampleButton();
    initializeAnimations();
}

// Search Form Functionality
function initializeSearchForm() {
    const searchForm = document.getElementById('searchForm');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');

    if (!searchForm) return;

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const organismSelect = document.getElementById('organism');
        const mirnaInput = document.getElementById('mirna_name');
        
        if (!organismSelect || !mirnaInput) return;
        
        const organismVersion = organismSelect.value;
        const mirnaName = mirnaInput.value.trim();
        
        if (!mirnaName) {
            return;
        }
        
        // Simulate search delay
        setTimeout(() => {
            // Show results
            showSearchResults(mirnaName, organismVersion);
        }, 1500);
    });
}

// Example Button Functionality
function initializeExampleButton() {
    const exampleBtn = document.getElementById('exampleBtn');
    
    if (!exampleBtn) return;
    
    exampleBtn.addEventListener('click', function() {
        // Set organism to Human
        const organismSelect = document.getElementById('organism');
        if (organismSelect) {
            organismSelect.value = 'human_GRCh38';
            updateOrganismDisplay('human_GRCh38');
        }
        
        // Set miRNA name to hsa-let-7a
        const mirnaInput = document.getElementById('mirna_name');
        if (mirnaInput) {
            mirnaInput.value = 'hsa-let-7a';
        }
        
        // Update autocomplete suggestions
        updateAutocompleteSuggestions('human_GRCh38');
        
        // Show example results
        showExampleResults();
    });
}

// Show Search Results
function showSearchResults(mirnaName, organismVersion) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;
    
    // Update the miRNA display name
    const mirnaDisplayName = document.getElementById('mirnaDisplayName');
    if (mirnaDisplayName) {
        mirnaDisplayName.textContent = mirnaName;
    }
    
    // Show the results container
    searchResults.style.display = 'grid';
    
    // Initialize collapsible containers
    initializeCollapsibleContainers();
    
    // Scroll to results
    searchResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Initialize Collapsible Containers
function initializeCollapsibleContainers() {
    // Alternative TSSs
    const altTssHeader = document.getElementById('altTssHeader');
    const altTssContent = document.getElementById('altTssContent');
    const altTssToggle = document.getElementById('altTssToggle');
    const altTssCard = altTssHeader?.closest('.collapsible-card');
    
    if (altTssHeader && altTssContent && altTssToggle) {
        altTssHeader.addEventListener('click', function(e) {
            if (e.target !== altTssToggle) {
                toggleCollapsible(altTssContent, altTssToggle, altTssCard);
            }
        });
        
        altTssToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleCollapsible(altTssContent, altTssToggle, altTssCard);
        });
    }
    
    // Transcription Factors
    const tfHeader = document.getElementById('tfHeader');
    const tfContent = document.getElementById('tfContent');
    const tfToggle = document.getElementById('tfToggle');
    const tfCard = tfHeader?.closest('.collapsible-card');
    
    if (tfHeader && tfContent && tfToggle) {
        tfHeader.addEventListener('click', function(e) {
            if (e.target !== tfToggle) {
                toggleCollapsible(tfContent, tfToggle, tfCard);
            }
        });
        
        tfToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleCollapsible(tfContent, tfToggle, tfCard);
        });
    }
    
    // Initialize click-to-copy functionality
    initializeClickToCopy();
    
    // Initialize Details button functionality
    initializeDetailsButton();
}

// Toggle Collapsible Container
function toggleCollapsible(content, toggle, card) {
    const isCollapsed = content.style.display === 'none';
    
    if (isCollapsed) {
        // Expand
        content.style.display = 'block';
        content.classList.remove('collapsed');
        card?.classList.remove('collapsed');
        toggle.innerHTML = '<i class="fas fa-chevron-up"></i>';
    } else {
        // Collapse
        content.style.display = 'none';
        content.classList.add('collapsed');
        card?.classList.add('collapsed');
        toggle.innerHTML = '<i class="fas fa-chevron-down"></i>';
    }
}

// Show Example Results
function showExampleResults() {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;
    
    const exampleData = {
        mirna_name: 'hsa-let-7a',
        organism: 'Human',
        genome_version: 'GRCh38/hg38',
        tss_count: 3,
        chromosome: 'chr9',
        strand: '+',
        coordinates: '94175877-94175977',
        expression_level: 'High',
        confidence_score: 0.95
    };
    
    const resultsHtml = `
        <div class="result-card">
            <div class="result-header">
                <div>
                    <div class="result-title">${exampleData.mirna_name}</div>
                    <div class="result-subtitle">${exampleData.organism} (${exampleData.genome_version})</div>
                </div>
                <div class="result-badge">Example Result</div>
            </div>
            <div class="result-details">
                <div class="detail-item">
                    <span class="detail-label">TSS Count</span>
                    <span class="detail-value">${exampleData.tss_count}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Chromosome</span>
                    <span class="detail-value">${exampleData.chromosome}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Strand</span>
                    <span class="detail-value">${exampleData.strand}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Coordinates</span>
                    <span class="detail-value">${exampleData.coordinates}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Expression Level</span>
                    <span class="detail-value">${exampleData.expression_level}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Confidence Score</span>
                    <span class="detail-value">${exampleData.confidence_score}</span>
                </div>
            </div>
        </div>
    `;
    
    searchResults.innerHTML = resultsHtml;
    searchResults.style.display = 'block';
}

// Organism Selection
function initializeOrganismSelection() {
    const organismSelect = document.getElementById('organism');

    if (!organismSelect) return;

    // Set initial display to show only "Human"
    updateOrganismDisplay('human_GRCh38');

    organismSelect.addEventListener('mousedown', function() {
        // When dropdown opens, restore full text for all options
        restoreFullText();
    });

    organismSelect.addEventListener('change', function() {
        // When selection changes, show only organism name for selected option
        const selectedValue = this.value;
        if (selectedValue) {
            // Use setTimeout to ensure the change event completes before updating display
            setTimeout(() => {
                updateOrganismDisplay(selectedValue);
            }, 0);
            
            // Reset everything when organism changes
            resetForm();
        }
    });

    // Handle clicking outside the dropdown
    document.addEventListener('click', function(e) {
        if (!organismSelect.contains(e.target)) {
            // When clicking outside, ensure the selected option shows only organism name
            const selectedValue = organismSelect.value;
            if (selectedValue) {
                updateOrganismDisplay(selectedValue);
            }
        }
    });

    // Initialize autocomplete with default organism
    updateAutocompleteSuggestions('human_GRCh38');
}

// Reset form when organism changes
function resetForm() {
    const mirnaInput = document.getElementById('mirna_name');
    const searchResults = document.getElementById('searchResults');
    
    if (mirnaInput) {
        mirnaInput.value = '';
    }
    
    if (searchResults) {
        searchResults.style.display = 'none';
        searchResults.innerHTML = '';
    }
    
    // Update autocomplete suggestions for new organism
    const organismSelect = document.getElementById('organism');
    if (organismSelect) {
        updateAutocompleteSuggestions(organismSelect.value);
    }
}

// Update organism display to show only "Human" or "Mouse"
function updateOrganismDisplay(organismVersion) {
    const organismSelect = document.getElementById('organism');
    if (!organismSelect) return;

    const selectedOption = organismSelect.querySelector(`option[value="${organismVersion}"]`);
    if (selectedOption) {
        const displayText = selectedOption.getAttribute('data-display');
        if (displayText) {
            // Update the selected option's text to show only the organism name
            selectedOption.textContent = displayText;
        }
    }
}

// Restore full text for all options when dropdown opens
function restoreFullText() {
    const organismSelect = document.getElementById('organism');
    if (!organismSelect) return;

    const options = organismSelect.querySelectorAll('option');
    options.forEach(option => {
        const value = option.value;
        if (ORIGINAL_TEXTS[value]) {
            option.textContent = ORIGINAL_TEXTS[value];
        }
    });
}

// Autocomplete Functionality
function initializeAutocomplete() {
    const mirnaInput = document.getElementById('mirna_name');
    if (!mirnaInput) return;

    let autocompleteList = null;

    mirnaInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        const organismVersion = document.getElementById('organism').value;

        // Remove existing autocomplete list
        if (autocompleteList) {
            autocompleteList.remove();
            autocompleteList = null;
        }

        if (value.length < 2 || !organismVersion) return;

        // Get organism-specific suggestions
        const organismData = ORGANISM_VERSION_MAP[organismVersion];
        if (!organismData) return;

        const suggestions = miRNA_LISTS[organismData.organism] || [];
        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(value)
        ).slice(0, 8); // Limit to 8 suggestions

        if (filteredSuggestions.length === 0) return;

        // Create autocomplete list
        autocompleteList = document.createElement('div');
        autocompleteList.className = 'autocomplete-list';
        autocompleteList.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 1px solid #e9ecef;
            border-top: none;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            max-height: 200px;
            overflow-y: auto;
            text-align: left;
        `;

        filteredSuggestions.forEach(suggestion => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.textContent = suggestion;
            item.style.cssText = `
                padding: 0.5rem 0.75rem;
                cursor: pointer;
                transition: background-color 0.2s ease;
                text-align: left;
                margin: 0;
                border-bottom: 1px solid #f0f0f0;
                font-size: 0.9rem;
            `;

            item.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f8f9fa';
            });

            item.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'white';
            });

            item.addEventListener('click', function() {
                mirnaInput.value = suggestion;
                autocompleteList.remove();
                autocompleteList = null;
            });

            autocompleteList.appendChild(item);
        });

        // Remove border from last item
        const lastItem = autocompleteList.lastElementChild;
        if (lastItem) {
            lastItem.style.borderBottom = 'none';
        }

        // Position the autocomplete list
        const formGroup = mirnaInput.closest('.form-group');
        formGroup.style.position = 'relative';
        formGroup.appendChild(autocompleteList);
    });

    // Close autocomplete when clicking outside
    document.addEventListener('click', function(e) {
        if (!mirnaInput.contains(e.target) && (!autocompleteList || !autocompleteList.contains(e.target))) {
            if (autocompleteList) {
                autocompleteList.remove();
                autocompleteList = null;
            }
        }
    });
}

// Update Autocomplete Suggestions
function updateAutocompleteSuggestions(organismVersion) {
    const mirnaInput = document.getElementById('mirna_name');
    if (!mirnaInput) return;

    // Clear input and trigger input event to update suggestions
    mirnaInput.value = '';
    mirnaInput.dispatchEvent(new Event('input'));
}

// Perform Search (Simulate API call)
async function performSearch(organism, mirnaName, genomeVersion) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock data - replace with actual API call
    const mockResults = [
        {
            id: 1,
            name: mirnaName,
            organism: organism,
            genome_version: genomeVersion,
            chromosome: 'chr9',
            strand: '+',
            start: '94175863',
            end: '94175943',
            tss: '94175863',
            confidence: 'High',
            expression: 'Expressed',
            target_genes: 156,
            validated_targets: 23
        },
        {
            id: 2,
            name: mirnaName + '-2',
            organism: organism,
            genome_version: genomeVersion,
            chromosome: 'chr9',
            strand: '-',
            start: '94175890',
            end: '94175970',
            tss: '94175970',
            confidence: 'Medium',
            expression: 'Low',
            target_genes: 89,
            validated_targets: 12
        }
    ];

    // Filter results based on search criteria
    return mockResults.filter(result =>
        result.name.toLowerCase().includes(mirnaName.toLowerCase()) ||
        result.organism.toLowerCase() === organism.toLowerCase()
    );
}

// Display Search Results
function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');

    if (!results || results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No Results Found</h3>
                <p>Try adjusting your search criteria or check the spelling of your miRNA name.</p>
            </div>
        `;
    } else {
        const resultsHTML = results.map(result => `
            <div class="result-card">
                <div class="result-header">
                    <div>
                        <div class="result-title">${result.name}</div>
                        <div class="result-subtitle">${result.organism} • ${result.genome_version} • ${result.chromosome}:${result.start}-${result.end}</div>
                    </div>
                    <div class="result-badge">${result.confidence}</div>
                </div>
                <div class="result-details">
                    <div class="detail-item">
                        <div class="detail-label">Strand</div>
                        <div class="detail-value">${result.strand}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">TSS Position</div>
                        <div class="detail-value">${result.tss}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Expression</div>
                        <div class="detail-value">${result.expression}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Target Genes</div>
                        <div class="detail-value">${result.target_genes}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Validated Targets</div>
                        <div class="detail-value">${result.validated_targets}</div>
                    </div>
                </div>
            </div>
        `).join('');

        searchResults.innerHTML = resultsHTML;
    }

    searchResults.style.display = 'block';

    // Scroll to results
    searchResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.hero-icon, .hero-title, .hero-subtitle, .search-container').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}



// Initialize Click-to-Copy Functionality
function initializeClickToCopy() {
    const infoValues = document.querySelectorAll('.info-value');
    
    infoValues.forEach(element => {
        element.addEventListener('click', function() {
            const textToCopy = this.textContent.trim();
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showCopySuccess(this);
                }).catch(() => {
                    fallbackCopyTextToClipboard(textToCopy, this);
                });
            } else {
                fallbackCopyTextToClipboard(textToCopy, this);
            }
        });
    });
}

// Show Copy Success
function showCopySuccess(element) {
    element.classList.add('copied');
    element.textContent = element.textContent + ' ✓';
    
    setTimeout(() => {
        element.classList.remove('copied');
        element.textContent = element.textContent.replace(' ✓', '');
    }, 2000);
}

// Fallback Copy Function
function fallbackCopyTextToClipboard(text, element) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess(element);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
    
    document.body.removeChild(textArea);
}

// Initialize Details Button Functionality
function initializeDetailsButton() {
    const detailsBtn = document.getElementById('mainTssDetails');
    
    if (detailsBtn) {
        detailsBtn.addEventListener('click', function() {
            showMainTssDetails();
        });
    }
}

// Show Main TSS Details
function showMainTssDetails() {
    const supportingEvidence = document.getElementById('supportingEvidence');
    const detailsBtn = document.getElementById('mainTssDetails');
    
    if (supportingEvidence && detailsBtn) {
        const isVisible = supportingEvidence.style.display !== 'none';
        
        if (isVisible) {
            // Hide the section
            supportingEvidence.style.display = 'none';
            detailsBtn.innerHTML = '<i class="fas fa-info-circle"></i> Details';
            detailsBtn.classList.remove('active');
        } else {
            // Show the section
            supportingEvidence.style.display = 'block';
            detailsBtn.innerHTML = '<i class="fas fa-times"></i> Hide Details';
            detailsBtn.classList.add('active');
        }
    }
}

// Export functions for use in other scripts
window.HomePage = {
    initializeHomePage,
    performSearch,
    displaySearchResults,
    showNotification
}; 