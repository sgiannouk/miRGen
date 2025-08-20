// Test script for Genome Browser functionality
// This can be used to test the Genome Browser without the full miRGen interface

function testGenomeBrowser() {
    console.log('Testing Genome Browser functionality...');
    
    // Test data for hsa-let-7a-1
    const testMirnaData = {
        name: 'hsa-let-7a-1',
        organism: 'human_GRCh38',
        preMirnaCoordinates: 'chr9:94,175,957-94,176,036(+)',
        matureCoordinates: [
            'chr9:94,175,962-94,175,983(+)',
            'chr9:94,176,013-94,176,033(+)'
        ],
        mainTss: 'chr9:94,166,274(+)',
        alternativeTss: [
            'chr9:94,166,284(+)',
            'chr9:94,166,278(+)'
        ],
        hostGeneCoordinates: 'chr9:94,166,274-94,176,036(+)'
    };
    
    try {
        // Check if GenomeBrowserView class exists
        if (typeof GenomeBrowserView === 'undefined') {
            console.error('GenomeBrowserView class not found. Make sure genome_browser_script.js is loaded.');
            return;
        }
        
        console.log('GenomeBrowserView class found. Creating test browser...');
        
        // Create a test container if it doesn't exist
        let testContainer = document.getElementById('test-genome-browser');
        if (!testContainer) {
            testContainer = document.createElement('div');
            testContainer.id = 'test-genome-browser';
            testContainer.style.width = '100%';
            testContainer.style.height = '400px';
            testContainer.style.border = '1px solid #ccc';
            testContainer.style.margin = '20px 0';
            document.body.appendChild(testContainer);
        }
        
        // Initialize the Genome Browser
        const genomeBrowser = new GenomeBrowserView('test-genome-browser');
        
        // Create the browser with test data
        genomeBrowser.createBrowser(testMirnaData, 'human_GRCh38')
            .then(() => {
                console.log('Test Genome Browser created successfully!');
                console.log('Test data used:', testMirnaData);
            })
            .catch(error => {
                console.error('Failed to create test Genome Browser:', error);
            });
        
    } catch (error) {
        console.error('Test failed:', error);
    }
}

// Auto-run test if this script is loaded directly
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', testGenomeBrowser);
} else {
    testGenomeBrowser();
}

// Export for manual testing
window.testGenomeBrowser = testGenomeBrowser;
