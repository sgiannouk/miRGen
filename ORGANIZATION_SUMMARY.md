# miRGen Website - Reorganized File Structure

## Overview
The codebase has been completely reorganized to separate concerns and improve maintainability. Each component now has its own dedicated files for HTML, CSS, and JavaScript.

## New File Structure

### 1. DIANA Toolbar Component
**Purpose**: Global navigation bar with DIANA Tools branding and functionality

**Files**:
- `frontend/templates/diana_toolbar.html` - HTML structure
- `frontend/static/css/diana_toolbar_style.css` - All DIANA toolbar styles
- `frontend/static/js/diana_toolbar_script.js` - DIANA toolbar functionality

**Features**:
- DIANA Tools logo with horizontal blue-to-green gradient
- "Our Tools" dropdown with dynamic loading from TSV
- About and Contact modals
- Mobile-responsive design
- Proper z-index management

### 2. Base Layout Component
**Purpose**: Main layout structure, miRGen navbar, and global styles

**Files**:
- `frontend/templates/base.html` - Main template with includes
- `frontend/static/css/base_style.css` - Global styles and miRGen navbar
- `frontend/static/js/base_script.js` - Base functionality and utilities

**Features**:
- Global CSS variables and reset
- miRGen navbar with proper positioning
- Main content area styling
- Utility functions (notifications, debounce, etc.)
- Responsive design

### 3. Footer Component
**Purpose**: Site footer with links, contact info, and newsletter signup

**Files**:
- `frontend/templates/footer.html` - Footer HTML structure
- `frontend/static/css/footer_style.css` - Footer styles
- `frontend/static/js/footer_script.js` - Footer functionality

**Features**:
- Multi-column layout with sections
- Social media links
- Newsletter signup form
- Back-to-top button
- Contact information
- Responsive design

## Key Improvements

### 1. Separation of Concerns
- Each component is self-contained
- No more monolithic CSS/JS files
- Clear boundaries between functionality

### 2. Maintainability
- Easy to find and modify specific features
- Reduced file sizes
- Better organization

### 3. Performance
- Smaller, focused files
- Better caching potential
- Reduced conflicts

### 4. Debugging
- Clear error sources
- Isolated functionality
- Better console logging

## File Dependencies

### CSS Loading Order (in base.html):
1. Bootstrap 5 CSS
2. Font Awesome
3. Google Fonts
4. `base_style.css` (global styles)
5. `diana_toolbar_style.css` (DIANA toolbar)
6. `footer_style.css` (footer)

### JavaScript Loading Order (in base.html):
1. Bootstrap 5 JS
2. `base_script.js` (base functionality)
3. `diana_toolbar_script.js` (DIANA toolbar)
4. `footer_script.js` (footer)

## Removed Files
- `frontend/static/css/diaba_tools_style.css` (replaced by component files)
- `frontend/static/js/diaba_tools_script.js` (replaced by component files)
- `frontend/static/css/footer.css` (replaced by footer_style.css)
- `frontend/static/js/footer.js` (replaced by footer_script.js)

## Usage

### Adding New Components
1. Create component-specific files (HTML, CSS, JS)
2. Include HTML in base.html
3. Link CSS and JS files in base.html
4. Follow naming convention: `component_name.html`, `component_style.css`, `component_script.js`

### Modifying Existing Components
- DIANA Toolbar: Edit files in `diana_toolbar_*`
- Base Layout: Edit files in `base_*`
- Footer: Edit files in `footer_*`

## Benefits of New Structure

1. **Modularity**: Each component is independent
2. **Scalability**: Easy to add new components
3. **Maintainability**: Clear file organization
4. **Performance**: Smaller, focused files
5. **Debugging**: Isolated functionality
6. **Team Development**: Multiple developers can work on different components

## Notes

- All functionality has been preserved
- No breaking changes to existing features
- Improved error handling and debugging
- Better responsive design
- Enhanced accessibility
- Optimized performance 