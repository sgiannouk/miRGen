// DIANA Toolbar JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing DIANA Toolbar...');
    initializeDianaToolbar();
    loadToolsFromTSV();
});

// DIANA Toolbar Functionality
function initializeDianaToolbar() {
    console.log('Initializing DIANA Toolbar...');
    
    const toolsMenuButton = document.getElementById('tools-menu-button');
    const toolsMenu = document.getElementById('tools-menu');
    const toolbarDropdown = document.querySelector('.toolbar-dropdown');
    const mobileMenuButton = document.getElementById('mobile-menu-button');

    console.log('Elements found:', {
        toolsMenuButton: !!toolsMenuButton,
        toolsMenu: !!toolsMenu,
        toolbarDropdown: !!toolbarDropdown,
        mobileMenuButton: !!mobileMenuButton
    });

    // Dropdown toggle functionality
    if (toolsMenuButton && toolbarDropdown) {
        console.log('Setting up dropdown functionality...');
        
        toolsMenuButton.addEventListener('click', function(event) {
            console.log('Tools menu button clicked!');
            event.preventDefault();
            event.stopPropagation();
            
            const isActive = toolbarDropdown.classList.contains('active');
            console.log('Current active state:', isActive);
            
            if (isActive) {
                toolbarDropdown.classList.remove('active');
                console.log('Dropdown closed');
            } else {
                toolbarDropdown.classList.add('active');
                console.log('Dropdown opened');
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!toolbarDropdown.contains(event.target)) {
                toolbarDropdown.classList.remove('active');
                console.log('Dropdown closed by outside click');
            }
        });

        // Close dropdown on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                toolbarDropdown.classList.remove('active');
                console.log('Dropdown closed by escape key');
            }
        });
    } else {
        console.error('Missing required elements for dropdown functionality');
    }

    // Mobile menu functionality
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
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

// Contact Modal Functionality
function initializeContactModal() {
    const contactModal = document.getElementById('contact-modal');
    const contactTrigger = document.getElementById('contact-modal-trigger');
    const contactClose = document.getElementById('contact-modal-close');
    const contactForm = document.getElementById('contact-form');
    const contactToolSelect = document.getElementById('contact-tool');
    const resetButton = document.getElementById('contact-form-reset');

    if (!contactModal || !contactTrigger) return;

    // Open modal
    contactTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        openContactModal();
    });

    // Close modal
    function closeContactModal() {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openContactModal() {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Focus on first input
        document.getElementById('contact-name').focus();
    }

    // Close on X button
    contactClose.addEventListener('click', closeContactModal);

    // Close on overlay click
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            closeContactModal();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && contactModal.classList.contains('active')) {
            closeContactModal();
        }
    });

    // Reset form
    resetButton.addEventListener('click', () => {
        contactForm.reset();
        // Remove any existing messages
        const existingMessage = contactForm.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
    });

    // Handle form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const emailData = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            tool: formData.get('tool'),
            message: formData.get('message')
        };

        // Show loading state
        const submitBtn = contactForm.querySelector('.btn-primary');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-1"></i>Sending...';
        submitBtn.disabled = true;

        try {
            const result = await simulateEmailSend(emailData);
            
            if (result.success) {
                showFormMessage(contactForm, 'Thank you! Your message has been sent successfully.', 'success');
                contactForm.reset();
            } else {
                showFormMessage(contactForm, 'Sorry, there was an error sending your message. Please try again.', 'error');
            }
        } catch (error) {
            showFormMessage(contactForm, 'Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            // Restore button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });

    // Load tools for contact form
    loadToolsForContact();
}

// Load tools from TSV file
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

// Load tools for contact form
async function loadToolsForContact() {
    const contactToolSelect = document.getElementById('contact-tool');
    if (!contactToolSelect) return;

    try {
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
                    type: columns[2].trim()
                });
            }
        }

        // Add tool options
        tools.forEach(tool => {
            const option = document.createElement('option');
            option.value = tool.name;
            option.textContent = `${tool.name} (${tool.type})`;
            contactToolSelect.appendChild(option);
        });

    } catch (error) {
        console.error('Error loading tools for contact form:', error);
    }
}

// Simulate email sending
async function simulateEmailSend(emailData) {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate success/failure
    const success = Math.random() > 0.1; // 90% success rate
    
    return {
        success,
        message: success ? 'Email sent successfully' : 'Failed to send email'
    };
}

// Show form message
function showFormMessage(form, message, type) {
    // Remove any existing messages
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    
    // Insert before form actions
    const formActions = form.querySelector('.form-actions');
    formActions.parentNode.insertBefore(messageDiv, formActions);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
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
        let top = rect.bottom + 15; // Always position below the dropdown

        // Adjust if tooltip goes off screen
        if (left < 10) left = 10;
        if (left + tooltipRect.width > window.innerWidth - 10) {
            left = window.innerWidth - tooltipRect.width - 10;
        }
        if (top + tooltipRect.height > window.innerHeight - 10) {
            top = rect.top - tooltipRect.height - 15; // Fallback to above if below doesn't fit
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

// Notification function
function showNotification(message, type = 'info') {
    // Create notification element
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
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Initialize modals when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAboutModal();
    initializeContactModal();
}); 