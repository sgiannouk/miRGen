// Home Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Home Page...');
    initializeHomePage();
});

// miRNA Lists (User will fill in the complete lists)
const miRNA_LISTS = {
    human: [
        'hsa-mir-99b',
        'hsa-let-7a-1'
        // User will add the complete human miRNA list here
    ],
    mouse: [
        'mmu-let-7a-1',
        'mmu-mir-9b-3'
        // User will add the complete mouse miRNA list here
    ]
};

// Organism-version mapping
const ORGANISM_VERSION_MAP = {
    'human_GRCh38': { organism: 'human', version: 'GRCh38' },
    'mouse_GRCm39': { organism: 'mouse', version: 'GRCm39' },
    'mouse_GRCm38': { organism: 'mouse', version: 'GRCm38' }
};

// Store original texts for all options
const ORIGINAL_TEXTS = {
    'human_GRCh38': 'Human (GRCh38/hg38)',
    'mouse_GRCm39': 'Mouse (GRCm39/mm39)',
    'mouse_GRCm38': 'Mouse (GRCm38/mm10)'
};

// Home Page Initialization
function initializeHomePage() {
    initializeSearchForm();
    initializeOrganismSelection();
    initializeAutocomplete();
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
        // Search functionality removed - form submission is prevented
    });
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

// Show notification (if not available from base script)
function showNotification(message, type = 'info', duration = 3000) {
    // Check if notification function is available from base script
    if (window.BaseLayout && window.BaseLayout.showNotification) {
        window.BaseLayout.showNotification(message, type, duration);
        return;
    }

    // Fallback notification implementation
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    `;

    // Set background color based on type
    const colors = {
        info: '#8ab4f8',
        success: '#34a853',
        warning: '#fbbc04',
        error: '#ea4335'
    };

    notification.style.backgroundColor = colors[type] || colors.info;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after duration
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, duration);
}

// Export functions for use in other scripts
window.HomePage = {
    initializeHomePage,
    performSearch,
    displaySearchResults,
    showNotification
}; 