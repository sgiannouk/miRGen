// miRGen v5 Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeSearch();
    initializeAnimations();
    initializeSmoothScrolling();
    initializeTooltips();
    initializeLoadingStates();
});

// Search Functionality
function initializeSearch() {
    const searchForm = document.querySelector('#search form');
    const searchQuery = document.getElementById('searchQuery');
    const searchType = document.getElementById('searchType');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performSearch();
        });
    }
    
    // Auto-search on input change (with debounce)
    if (searchQuery) {
        let searchTimeout;
        searchQuery.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                if (this.value.length >= 3) {
                    performSearch();
                }
            }, 500);
        });
    }
}

function performSearch() {
    const searchQuery = document.getElementById('searchQuery').value;
    const searchType = document.getElementById('searchType').value;
    
    if (!searchQuery.trim()) {
        showNotification('Please enter a search query', 'warning');
        return;
    }
    
    // Show loading state
    showLoadingState();
    
    // Simulate API call (replace with actual API endpoint)
    setTimeout(() => {
        hideLoadingState();
        
        // For demo purposes, show mock results
        if (searchQuery.toLowerCase().includes('mir')) {
            showMockResults(searchQuery, searchType);
        } else {
            showNotification('No results found for your query', 'info');
        }
    }, 1500);
}

function showMockResults(query, type) {
    const mockData = {
        mirna: [
            { name: 'hsa-miR-21-5p', sequence: 'UAGCUUAUCAGACUGAUGUUGA', targets: 156, expression: 'High' },
            { name: 'hsa-miR-155-5p', sequence: 'UUAAUGCUAAUCGUGAUAGGGGU', targets: 89, expression: 'Medium' },
            { name: 'hsa-miR-16-5p', sequence: 'UAGCAGCACGUAAAUAUUGGCG', targets: 234, expression: 'High' }
        ],
        gene: [
            { name: 'TP53', description: 'Tumor protein p53', mirnas: 12, pathways: 8 },
            { name: 'PTEN', description: 'Phosphatase and tensin homolog', mirnas: 8, pathways: 5 },
            { name: 'BCL2', description: 'B-cell lymphoma 2', mirnas: 15, pathways: 6 }
        ]
    };
    
    const results = mockData[type] || mockData.mirna;
    displaySearchResults(results, type);
}

function displaySearchResults(results, type) {
    // Remove existing results
    const existingResults = document.querySelector('.search-results');
    if (existingResults) {
        existingResults.remove();
    }
    
    // Create results container
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'search-results';
    resultsContainer.innerHTML = `
        <div class="card-header bg-primary text-white">
            <h5 class="mb-0"><i class="fas fa-search me-2"></i>Search Results (${results.length})</h5>
        </div>
        <div class="card-body p-0">
            ${results.map(result => createResultItem(result, type)).join('')}
        </div>
    `;
    
    // Insert after search form
    const searchSection = document.getElementById('search');
    searchSection.appendChild(resultsContainer);
    
    // Add fade-in animation
    resultsContainer.classList.add('fade-in');
}

function createResultItem(result, type) {
    if (type === 'mirna') {
        return `
            <div class="result-item">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <h6 class="fw-bold text-primary mb-1">${result.name}</h6>
                        <small class="text-muted">${result.sequence}</small>
                    </div>
                    <div class="col-md-3">
                        <span class="badge bg-success me-2">${result.targets} targets</span>
                        <span class="badge bg-info">${result.expression} expression</span>
                    </div>
                    <div class="col-md-3">
                        <button class="btn btn-sm btn-outline-primary" onclick="viewDetails('${result.name}')">
                            <i class="fas fa-eye me-1"></i>View Details
                        </button>
                    </div>
                    <div class="col-md-2 text-end">
                        <button class="btn btn-sm btn-outline-secondary" onclick="downloadData('${result.name}')">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    } else {
        return `
            <div class="result-item">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <h6 class="fw-bold text-primary mb-1">${result.name}</h6>
                        <small class="text-muted">${result.description}</small>
                    </div>
                    <div class="col-md-3">
                        <span class="badge bg-success me-2">${result.mirnas} miRNAs</span>
                        <span class="badge bg-warning">${result.pathways} pathways</span>
                    </div>
                    <div class="col-md-3">
                        <button class="btn btn-sm btn-outline-primary" onclick="viewDetails('${result.name}')">
                            <i class="fas fa-eye me-1"></i>View Details
                        </button>
                    </div>
                    <div class="col-md-2 text-end">
                        <button class="btn btn-sm btn-outline-secondary" onclick="downloadData('${result.name}')">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

// Animation System
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.card, .stat-item, .feature-icon').forEach(el => {
        observer.observe(el);
    });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Tooltips
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Loading States
function initializeLoadingStates() {
    // Add loading class to buttons when clicked
    document.addEventListener('click', function(e) {
        if (e.target.matches('.btn') && !e.target.classList.contains('btn-outline')) {
            e.target.classList.add('loading');
            setTimeout(() => {
                e.target.classList.remove('loading');
            }, 2000);
        }
    });
}

function showLoadingState() {
    const searchButton = document.querySelector('#search .btn-primary');
    if (searchButton) {
        searchButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Searching...';
        searchButton.disabled = true;
    }
}

function hideLoadingState() {
    const searchButton = document.querySelector('#search .btn-primary');
    if (searchButton) {
        searchButton.innerHTML = '<i class="fas fa-search"></i>';
        searchButton.disabled = false;
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Utility Functions
function viewDetails(itemName) {
    showNotification(`Viewing details for ${itemName}`, 'info');
    // Implement detailed view functionality
}

function downloadData(itemName) {
    showNotification(`Downloading data for ${itemName}`, 'success');
    // Implement download functionality
}

// Statistics Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const suffix = counter.textContent.replace(/[\d,]/g, '');
        let current = 0;
        const increment = target / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current).toLocaleString() + suffix;
        }, 20);
    });
}

// Initialize counter animation when statistics section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.bg-primary');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// DIANA Toolbar Functionality
function initializeDianaToolbar() {
    const toolsMenuButton = document.getElementById('tools-menu-button');
    const toolsMenu = document.getElementById('tools-menu');
    const toolbarDropdown = document.querySelector('.toolbar-dropdown');
    const mobileMenuButton = document.getElementById('mobile-menu-button');

    // Dropdown toggle functionality
    if (toolsMenuButton && toolsMenu) {
        toolsMenuButton.addEventListener('click', (event) => {
            event.stopPropagation();
            toolbarDropdown.classList.toggle('active');
        });

            // Close dropdown when clicking outside or leaving the dropdown area
    document.addEventListener('click', (event) => {
        if (!toolbarDropdown.contains(event.target)) {
            toolbarDropdown.classList.remove('active');
        }
    });

    // Close dropdown when mouse leaves the dropdown area (with delay to prevent accidental closing)
    let dropdownTimeout = null;
    
    toolbarDropdown.addEventListener('mouseleave', () => {
        dropdownTimeout = setTimeout(() => {
            toolbarDropdown.classList.remove('active');
        }, 150); // Small delay to allow moving between button and menu
    });
    
    toolbarDropdown.addEventListener('mouseenter', () => {
        if (dropdownTimeout) {
            clearTimeout(dropdownTimeout);
            dropdownTimeout = null;
        }
    });

    // Close dropdown on escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            toolbarDropdown.classList.remove('active');
        }
    });
    }

    // Mobile menu functionality
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            // Add mobile menu functionality here
            showNotification('Mobile menu coming soon!', 'info');
        });
    }

    // Toolbar link hover effects
    const toolbarLinks = document.querySelectorAll('.toolbar-link');
    toolbarLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Dropdown item interactions
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// About Modal Functionality
function initializeAboutModal() {
    const aboutModalTrigger = document.getElementById('about-modal-trigger');
    const aboutModal = document.getElementById('about-modal');
    const aboutModalClose = document.getElementById('about-modal-close');

    // Open modal
    if (aboutModalTrigger && aboutModal) {
        aboutModalTrigger.addEventListener('click', (event) => {
            event.preventDefault();
            aboutModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    }

    // Close modal functions
    function closeModal() {
        aboutModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Close on X button
    if (aboutModalClose) {
        aboutModalClose.addEventListener('click', closeModal);
    }

    // Close on overlay click
    if (aboutModal) {
        aboutModal.addEventListener('click', (event) => {
            if (event.target === aboutModal) {
                closeModal();
            }
        });
    }

    // Close on escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && aboutModal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Initialize toolbar when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeDianaToolbar();
    initializeAboutModal();
    loadToolsFromTSV();
});

// Load Tools from TSV
async function loadToolsFromTSV() {
    const toolsContainer = document.getElementById('tools-container');
    if (!toolsContainer) return;

    try {
        // Fetch the TSV file
        const response = await fetch('/static/files/DIANA_tools_description.tsv');
        if (!response.ok) {
            throw new Error('Failed to load tools data');
        }
        
        const tsvData = await response.text();
        const lines = tsvData.trim().split('\n');
        
        // Parse TSV (skip header)
        const tools = [];
        for (let i = 1; i < lines.length; i++) {
            const columns = lines[i].split('\t');
            if (columns.length >= 7) {
                tools.push({
                    name: columns[0].trim(),
                    version: columns[1].trim(),
                    type: columns[2].trim(),
                    shortDesc: columns[3].trim(),
                    description: columns[4].trim(),
                    explicitDesc: columns[5].trim(),
                    url: columns[6].trim()
                });
            }
        }

        // Clear loading placeholder
        toolsContainer.innerHTML = '';

        // Create tool items
        tools.forEach(tool => {
            const toolItem = document.createElement('a');
            toolItem.href = tool.url;
            toolItem.className = `dropdown-item ${tool.type}`;
            toolItem.setAttribute('data-tool-id', tool.name.toLowerCase().replace(/[^a-z0-9]/g, '-'));
            toolItem.setAttribute('target', '_blank');
            toolItem.setAttribute('rel', 'noopener noreferrer');
            toolItem.setAttribute('data-tooltip', tool.explicitDesc);

            // Check if this is the current tool (miRGen v5)
            const isCurrentTool = tool.name.toLowerCase().includes('mirgen');
            if (isCurrentTool) {
                toolItem.classList.add('active');
            }

            toolItem.innerHTML = `
                <div class="tool-info">
                    <div class="tool-name">
                        ${tool.name}
                        ${tool.version ? `<span class="tool-version-badge">v${tool.version}</span>` : ''}
                        <span class="tool-type-badge ${tool.type}">${tool.type}</span>
                    </div>
                    <div class="tool-desc">${tool.shortDesc}</div>
                </div>
                <i class="fas fa-${isCurrentTool ? 'check' : 'external-link-alt'}"></i>
            `;

            // Add hover effects and tooltip
            toolItem.addEventListener('mouseenter', function(e) {
                this.style.transform = 'translateX(5px)';
                showTooltip(this, e);
            });
            
            toolItem.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
                hideTooltip();
            });

            toolsContainer.appendChild(toolItem);
        });

        console.log(`Loaded ${tools.length} tools from TSV file`);

    } catch (error) {
        console.error('Error loading tools:', error);
        toolsContainer.innerHTML = `
            <div class="dropdown-item error">
                <div class="tool-info">
                    <div class="tool-name">Error loading tools</div>
                    <div class="tool-desc">Please refresh the page</div>
                </div>
                <i class="fas fa-exclamation-triangle"></i>
            </div>
        `;
    }
}

// Tooltip functionality
let currentTooltip = null;
let tooltipTimeout = null;

function showTooltip(element, event) {
    const tooltipText = element.getAttribute('data-tooltip');
    if (!tooltipText) return;

    // Clear any existing timeout
    if (tooltipTimeout) {
        clearTimeout(tooltipTimeout);
        tooltipTimeout = null;
    }

    // Remove existing tooltip
    if (currentTooltip) {
        currentTooltip.remove();
        currentTooltip = null;
    }

    // Create new tooltip
    currentTooltip = document.createElement('div');
    currentTooltip.className = 'tooltip';
    currentTooltip.textContent = tooltipText;
    document.body.appendChild(currentTooltip);

    // Position tooltip after it's added to DOM
    setTimeout(() => {
        if (!currentTooltip) return;
        
        const rect = element.getBoundingClientRect();
        const tooltipRect = currentTooltip.getBoundingClientRect();
        
        let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        let top = rect.top - tooltipRect.height - 15;

        // Adjust if tooltip goes off screen
        if (left < 10) left = 10;
        if (left + tooltipRect.width > window.innerWidth - 10) {
            left = window.innerWidth - tooltipRect.width - 10;
        }
        if (top < 10) {
            top = rect.bottom + 15;
        }

        currentTooltip.style.left = left + 'px';
        currentTooltip.style.top = top + 'px';

        // Show tooltip
        currentTooltip.classList.add('show');
    }, 50);
}

function hideTooltip() {
    if (tooltipTimeout) {
        clearTimeout(tooltipTimeout);
    }
    
    tooltipTimeout = setTimeout(() => {
        if (currentTooltip) {
            currentTooltip.classList.remove('show');
            setTimeout(() => {
                if (currentTooltip && currentTooltip.parentNode) {
                    currentTooltip.remove();
                }
                currentTooltip = null;
            }, 200);
        }
        tooltipTimeout = null;
    }, 100); // Small delay to prevent flickering
}

// Export functions for global access
window.mirGenUtils = {
    performSearch,
    showNotification,
    viewDetails,
    downloadData,
    animateCounters,
    initializeDianaToolbar,
    initializeAboutModal,
    loadToolsFromTSV,
    showTooltip,
    hideTooltip
};
