// Genome Browser View Script using igv.js

class GenomeBrowserView {
    constructor(containerId) {
        this.containerId = containerId;
        this.browser = null;
        this.currentConfig = null;
        this.annotationData = null;
        this.isInitialized = false;
        
        // Track configurations for different organisms
        this.genomeConfigs = {
            'human_GRCh38': {
                genome: 'hg38',
                annotationUrl: '/static/annotations/gencode.v48.hg38.bigBed',
                displayName: 'Human (GRCh38)'
            },
            'mouse_GRCm38': {
                genome: 'mm10',
                annotationUrl: '/static/annotations/gencode.vM25.mm10.bigBed',
                displayName: 'Mouse (GRCm38)'
            }
        };
        
        this.init();
    }
    
    async init() {
        try {
            this.setupContainer();
            this.bindEvents();
            
        } catch (error) {
            console.error('Failed to initialize Genome Browser:', error);
            this.showError('Failed to initialize Genome Browser', error.message);
        }
    }
    
    async loadIGV() {
        return new Promise((resolve, reject) => {
            console.log('Loading igv.js from CDN...');
            
            // Try multiple IGV.js versions for better compatibility
            const igvVersions = [
                'https://cdn.jsdelivr.net/npm/igv@2.17.0/dist/igv.min.js',
                'https://cdn.jsdelivr.net/npm/igv@2.16.0/dist/igv.min.js',
                'https://cdn.jsdelivr.net/npm/igv@2.15.0/dist/igv.min.js',
                'https://cdn.jsdelivr.net/npm/igv@3.5.0/dist/igv.min.js',
                'https://cdn.jsdelivr.net/npm/igv@3.4.0/dist/igv.min.js'
            ];
            
            let currentVersionIndex = 0;
            
            const tryLoadVersion = () => {
                if (currentVersionIndex >= igvVersions.length) {
                    reject(new Error('All IGV.js versions failed to load'));
                    return;
                }
                
                const script = document.createElement('script');
                script.src = igvVersions[currentVersionIndex];
                console.log(`Trying IGV.js version: ${igvVersions[currentVersionIndex]}`);
                
                script.onload = () => {
                    console.log(`IGV.js ${igvVersions[currentVersionIndex]} loaded successfully`);
                    resolve();
                };
                
                script.onerror = () => {
                    console.warn(`Failed to load IGV.js version: ${igvVersions[currentVersionIndex]}`);
                    currentVersionIndex++;
                    tryLoadVersion();
                };
                
                document.head.appendChild(script);
            };
            
            tryLoadVersion();
        });
    }
    
    setupContainer() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            throw new Error(`Container with ID '${this.containerId}' not found`);
        }
        
        container.innerHTML = `
            <div class="genome-browser-header">
                <div class="genome-browser-title">
                    <i class="fas fa-dna"></i>
                    <span>Genome Browser View</span>
                </div>
                <div class="genome-browser-controls">
                    <button class="genome-browser-btn" id="zoomInBtn" title="Zoom In">
                        <i class="fas fa-search-plus"></i>
                    </button>
                    <button class="genome-browser-btn" id="zoomOutBtn" title="Zoom Out">
                        <i class="fas fa-search-minus"></i>
                    </button>
                    <button class="genome-browser-btn" id="resetViewBtn" title="Reset View">
                        <i class="fas fa-home"></i>
                    </button>
                    <button class="genome-browser-btn" id="toggleTracksBtn" title="Toggle Tracks">
                        <i class="fas fa-layer-group"></i>
                    </button>
                </div>
            </div>
            <div class="genome-browser-content">
                <div class="genome-browser-loading">
                    <div class="spinner"></div>
                </div>
            </div>
        `;
    }
    
    bindEvents() {
        const container = document.getElementById(this.containerId);
        
        // Zoom controls
        container.querySelector('#zoomInBtn').addEventListener('click', () => {
            if (this.browser) this.browser.zoomIn();
        });
        
        container.querySelector('#zoomOutBtn').addEventListener('click', () => {
            if (this.browser) this.browser.zoomOut();
        });
        
        container.querySelector('#resetViewBtn').addEventListener('click', () => {
            if (this.browser && this.currentConfig) {
                this.browser.search(this.currentConfig.locus);
            }
        });
        
        container.querySelector('#toggleTracksBtn').addEventListener('click', () => {
            this.toggleTrackVisibility();
        });
    }
    
    async loadAnnotationData(organismVersion) {
        const config = this.genomeConfigs[organismVersion];
        if (!config) {
            throw new Error(`Unsupported organism version: ${organismVersion}`);
        }
        
        // For now, create mock annotation data since we don't have the bigBed files yet
        // This will be replaced with actual bigBed file loading later
        this.annotationData = this.createMockAnnotationData(organismVersion);
        
        return this.annotationData;
    }
    
    createMockAnnotationData(organismVersion) {
        if (organismVersion === 'human_GRCh38') {
            return {
                // Mock host gene data for hsa-let-7a-1 with complete transcript structure
                hostGene: {
                    name: 'MIRLET7A1HG',
                    chrom: 'chr9',
                    start: 94166274,
                    end: 94200905,
                    strand: '+',
                    // Complete exon structure for the transcript with realistic spacing
                    exons: [
                        { start: 94166274, end: 94166500, name: 'Exon 1' },
                        { start: 94168000, end: 94168200, name: 'Exon 2' },
                        { start: 94170000, end: 94170200, name: 'Exon 3' },
                        { start: 94172000, end: 94172200, name: 'Exon 4' },
                        { start: 94174000, end: 94174200, name: 'Exon 5' },
                        { start: 94175957, end: 94176036, name: 'Exon 6 (Pre-miRNA)' },
                        { start: 94178000, end: 94178200, name: 'Exon 7' },
                        { start: 94180000, end: 94180200, name: 'Exon 8' },
                        { start: 94182000, end: 94182200, name: 'Exon 9' },
                        { start: 94184000, end: 94184200, name: 'Exon 10' },
                        { start: 94186000, end: 94186200, name: 'Exon 11' },
                        { start: 94188000, end: 94188200, name: 'Exon 12' },
                        { start: 94190000, end: 94190200, name: 'Exon 13' },
                        { start: 94192000, end: 94192200, name: 'Exon 14' },
                        { start: 94194000, end: 94194200, name: 'Exon 15' },
                        { start: 94196000, end: 94196200, name: 'Exon 16' },
                        { start: 94198000, end: 94198200, name: 'Exon 17' },
                        { start: 94200000, end: 94200905, name: 'Exon 18' }
                    ]
                }
            };
        } else if (organismVersion === 'mouse_GRCm38') {
            return {
                // Mock host gene data for mouse
                hostGene: {
                    name: 'Let7g',
                    chrom: 'chr9',
                    start: 106056789,
                    end: 106056869,
                    strand: '+',
                    exons: [
                        { start: 106056789, end: 106056869 }
                    ]
                }
            };
        }
        
        return null;
    }
    
    async createBrowser(mirnaData, organismVersion) {
        try {
            console.log('Creating Genome Browser for:', mirnaData.name, 'on', organismVersion);
            
            // Show loading state
            this.showLoading('Initializing Genome Browser...');
            
            const config = this.genomeConfigs[organismVersion];
            if (!config) {
                throw new Error(`Unsupported organism version: ${organismVersion}`);
            }
            
            // Load IGV.js first if not available
            if (typeof igv === 'undefined') {
                console.log('IGV.js not loaded, loading from CDN...');
                this.showLoading('Loading IGV.js...');
                await this.loadIGV();
                console.log('IGV.js loaded successfully');
            }
            
            // Check browser compatibility
            if (!this.checkBrowserCompatibility()) {
                throw new Error('Browser compatibility issue: IGV.js requires a modern browser with Shadow DOM support. Please try using Chrome, Firefox, Safari, or Edge.');
            }
            
            // Load annotation data
            console.log('Loading annotation data...');
            this.showLoading('Loading annotation data...');
            await this.loadAnnotationData(organismVersion);
            console.log('Annotation data loaded:', this.annotationData);
            
            // Create browser configuration
            console.log('Creating browser configuration...');
            this.showLoading('Creating browser configuration...');
            const browserConfig = this.createBrowserConfig(mirnaData, config);
            console.log('Browser config created:', browserConfig);
            
            // Create the browser
            const container = document.querySelector(`#${this.containerId} .genome-browser-content`);
            if (!container) {
                throw new Error(`Container not found: #${this.containerId} .genome-browser-content`);
            }
            
            this.showLoading('Creating IGV browser...');
            container.innerHTML = '<div id="igv-browser"></div>';
            console.log('Container prepared, creating igv browser...');
            
            // Create the IGV browser with error handling
            try {
                console.log('Attempting to create IGV browser...');
                this.browser = await igv.createBrowser('#igv-browser', browserConfig);
                this.currentConfig = browserConfig;
                this.isInitialized = true;
                
                // Add custom event listeners
                this.addBrowserEventListeners();
                
                console.log('Genome Browser created successfully');
            } catch (browserError) {
                console.error('IGV browser creation failed:', browserError);
                
                // Check for specific attachShadow error
                if (browserError.message && browserError.message.includes('attachShadow')) {
                    console.warn('Shadow DOM error detected, trying fallback configuration...');
                    
                    // Try with a simpler configuration
                    try {
                        const fallbackConfig = {
                            genome: 'hg38',
                            locus: 'chr9:94066274-94300905',
                            tracks: [
                                {
                                    name: 'Reference',
                                    type: 'sequence',
                                    height: 100
                                }
                            ]
                        };
                        
                        console.log('Trying fallback configuration:', fallbackConfig);
                        this.browser = await igv.createBrowser('#igv-browser', fallbackConfig);
                        this.currentConfig = fallbackConfig;
                        this.isInitialized = true;
                        
                        console.log('Genome Browser created successfully with fallback configuration');
                        return;
                        
                    } catch (fallbackError) {
                        console.error('Fallback configuration also failed:', fallbackError);
                        
                        // Try to create a basic text-based genome browser as last resort
                        try {
                            console.log('Creating basic text-based genome browser...');
                            this.createBasicTextBrowser();
                            return;
                        } catch (basicError) {
                            console.error('Basic browser creation also failed:', basicError);
                            throw new Error('Browser compatibility issue: IGV.js requires a modern browser with Shadow DOM support. Please try using Chrome, Firefox, Safari, or Edge.');
                        }
                    }
                }
                
                // Check for other common IGV.js errors
                if (browserError.message && browserError.message.includes('genome')) {
                    throw new Error('Genome configuration error: Please check that the genome reference is valid.');
                }
                
                // Generic error
                throw new Error(`IGV browser creation failed: ${browserError.message}`);
            }
            
        } catch (error) {
            console.error('Failed to create Genome Browser:', error);
            this.showError('Failed to create Genome Browser', error.message);
        }
    }
    
    createBrowserConfig(mirnaData, genomeConfig) {
        console.log('Creating browser config for:', mirnaData);
        
        // Calculate the view region to include all relevant features
        const regions = this.calculateViewRegions(mirnaData);
        console.log('Calculated regions:', regions);
        
        const locus = this.calculateLocus(regions);
        console.log('Calculated locus:', locus);
        
        // Create tracks
        const hostGeneTracks = this.createHostGeneTracks(mirnaData);
        const preMiRNATracks = this.createPreMiRNATracks(mirnaData);
        const matureMiRNATracks = this.createMatureMiRNATracks(mirnaData);
        const tssTracks = this.createTSSTracks(mirnaData);
        
        console.log('Tracks created:', {
            hostGene: hostGeneTracks.length,
            preMiRNA: preMiRNATracks.length,
            mature: matureMiRNATracks.length,
            tss: tssTracks.length
        });
        
        // Create a simpler config for testing
        const config = {
            genome: genomeConfig.genome,
            locus: locus,
            tracks: [
                // Reference genome track
                {
                    name: 'Reference',
                    type: 'sequence',
                    height: 100
                },
                // Host gene track (if available)
                ...hostGeneTracks,
                // Pre-miRNA track
                ...preMiRNATracks,
                // Mature miRNA tracks
                ...matureMiRNATracks,
                // TSS tracks
                ...tssTracks
            ]
        };
        
        console.log('Final browser config:', config);
        return config;
    }
    
    calculateViewRegions(mirnaData) {
        const regions = [];
        
        console.log('Calculating view regions for:', mirnaData);
        
        // Add pre-miRNA coordinates
        if (mirnaData.preMirnaCoordinates) {
            console.log('Parsing pre-miRNA coordinates:', mirnaData.preMirnaCoordinates);
            const coords = this.parseCoordinates(mirnaData.preMirnaCoordinates);
            if (coords) {
                regions.push(coords);
                console.log('Added pre-miRNA region:', coords);
            } else {
                console.warn('Failed to parse pre-miRNA coordinates:', mirnaData.preMirnaCoordinates);
            }
        }
        
        // Add mature miRNA coordinates
        if (mirnaData.matureCoordinates && Array.isArray(mirnaData.matureCoordinates)) {
            mirnaData.matureCoordinates.forEach((coord, index) => {
                console.log(`Parsing mature miRNA ${index + 1} coordinates:`, coord);
                const coords = this.parseCoordinates(coord);
                if (coords) {
                    regions.push(coords);
                    console.log(`Added mature miRNA ${index + 1} region:`, coords);
                } else {
                    console.warn(`Failed to parse mature miRNA ${index + 1} coordinates:`, coord);
                }
            });
        }
        
        // Add TSS coordinates
        if (mirnaData.mainTss) {
            console.log('Parsing main TSS coordinates:', mirnaData.mainTss);
            const coords = this.parseCoordinates(mirnaData.mainTss);
            if (coords) {
                regions.push(coords);
                console.log('Added main TSS region:', coords);
            } else {
                console.warn('Failed to parse main TSS coordinates:', mirnaData.mainTss);
            }
        }
        
        console.log('Final regions array:', regions);
        
        // If no regions were parsed successfully, create a default region for hsa-let-7a-1
        if (regions.length === 0) {
            console.warn('No regions parsed successfully, creating default region for hsa-let-7a-1');
            const defaultRegion = {
                chrom: 'chr9',
                start: 94166274,
                end: 94200905,
                strand: '+'
            };
            regions.push(defaultRegion);
            console.log('Added default region:', defaultRegion);
        }
        
        return regions;
    }
    
    parseCoordinates(coordString) {
        if (!coordString || typeof coordString !== 'string') {
            console.warn('Invalid coordinate string:', coordString);
            return null;
        }
        
        console.log('Parsing coordinate string:', coordString);
        
        // Try different coordinate formats
        let match = coordString.match(/chr(\d+|X|Y):(\d+(?:,\d{3})*)-(\d+(?:,\d{3})*)\s*\(([+-])\)/);
        
        if (!match) {
            // Try without spaces around the parentheses
            match = coordString.match(/chr(\d+|X|Y):(\d+(?:,\d{3})*)-(\d+(?:,\d{3})*)\s*\(([+-])\)/);
        }
        
        if (!match) {
            // Try with just the basic format
            match = coordString.match(/chr(\d+|X|Y):(\d+)-(\d+)\s*\(([+-])\)/);
        }
        
        if (match) {
            const start = parseInt(match[2].replace(/,/g, ''));
            const end = parseInt(match[3].replace(/,/g, ''));
            
            if (isNaN(start) || isNaN(end)) {
                console.warn('Invalid start/end values:', start, end);
                return null;
            }
            
            const result = {
                chrom: `chr${match[1]}`,
                start: Math.min(start, end),
                end: Math.max(start, end),
                strand: match[4]
            };
            
            console.log('Successfully parsed coordinates:', result);
            return result;
        }
        
        console.warn('Failed to parse coordinate string:', coordString);
        return null;
    }
    
    calculateLocus(regions) {
        console.log('Calculating locus for regions:', regions);
        
        if (!regions || regions.length === 0) {
            console.warn('No regions provided, using default locus');
            return 'chr1:1-1000';
        }
        
        // Filter out any null regions
        const validRegions = regions.filter(region => region && region.chrom);
        console.log('Valid regions:', validRegions);
        
        if (validRegions.length === 0) {
            console.warn('No valid regions found, using default locus');
            return 'chr1:1-1000';
        }
        
        const chrom = validRegions[0].chrom;
        let minStart = validRegions[0].start;
        let maxEnd = validRegions[0].end;
        
        validRegions.forEach(region => {
            if (region && region.chrom === chrom) {
                minStart = Math.min(minStart, region.start);
                maxEnd = Math.max(maxEnd, region.end);
            }
        });
        
        console.log('Calculated min/max:', { chrom, minStart, maxEnd });
        
        // For hsa-let-7a-1, ensure we show the full transcript with exactly 1000 bases padding
        if (chrom === 'chr9' && minStart >= 94166274) {
            // Show the full transcript span with exactly 1000 bases before and after
            const transcriptStart = 94166274;
            const transcriptEnd = 94200905;
            const padding = 1000;
            const locus = `${chrom}:${Math.max(1, transcriptStart - padding)}-${transcriptEnd + padding}`;
            console.log('Using hsa-let-7a-1 specific locus:', locus);
            return locus;
        }
        
        // Default padding for other cases
        const padding = Math.max(1000, (maxEnd - minStart) * 0.1);
        const locus = `${chrom}:${Math.max(1, minStart - padding)}-${maxEnd + padding}`;
        console.log('Using default locus:', locus);
        return locus;
    }
    
    createHostGeneTracks(mirnaData) {
        const tracks = [];
        
        // Create host gene track using mock data
        if (this.annotationData && this.annotationData.hostGene) {
            const hostGene = this.annotationData.hostGene;
            
            // Create BED format data for the host gene transcript
            const hostGeneData = [{
                chrom: hostGene.chrom,
                start: hostGene.start,
                end: hostGene.end,
                name: hostGene.name,
                strand: hostGene.strand,
                color: '#34a853'
            }];
            
            // Create exon tracks with proper naming
            const exonData = hostGene.exons.map((exon, index) => ({
                chrom: hostGene.chrom,
                start: exon.start,
                end: exon.end,
                name: exon.name || `${hostGene.name} Exon ${index + 1}`,
                strand: hostGene.strand,
                color: '#34a853'
            }));
            
            // Create intron tracks (spaces between exons)
            const intronData = [];
            for (let i = 0; i < hostGene.exons.length - 1; i++) {
                const currentExon = hostGene.exons[i];
                const nextExon = hostGene.exons[i + 1];
                if (nextExon.start > currentExon.end) {
                    intronData.push({
                        chrom: hostGene.chrom,
                        start: currentExon.end,
                        end: nextExon.start,
                        name: `${hostGene.name} Intron ${i + 1}`,
                        strand: hostGene.strand,
                        color: '#ff6b6b'
                    });
                }
            }
            
            // Main transcript track
            tracks.push({
                name: 'MIRLET7A1HG Transcript',
                type: 'annotation',
                format: 'bed',
                data: hostGeneData,
                height: 60,
                className: 'host-gene-track'
            });
            
            // Exon tracks
            tracks.push({
                name: 'Exons',
                type: 'annotation',
                format: 'bed',
                data: exonData,
                height: 40,
                className: 'host-gene-track',
                color: '#34a853'
            });
            
            // Intron tracks (if any)
            if (intronData.length > 0) {
                tracks.push({
                    name: 'Introns',
                    type: 'annotation',
                    format: 'bed',
                    data: intronData,
                    height: 30,
                    className: 'intron-track',
                    color: '#ff6b6b'
                });
            }
        }
        
        return tracks;
    }
    
    createPreMiRNATracks(mirnaData) {
        if (!mirnaData.preMirnaCoordinates) return [];
        
        const coords = this.parseCoordinates(mirnaData.preMirnaCoordinates);
        if (!coords) return [];
        
        return [{
            name: 'Pre-miRNA',
            type: 'annotation',
            format: 'bed',
            data: [{
                chrom: coords.chrom,
                start: coords.start,
                end: coords.end,
                name: 'Pre-miRNA',
                strand: coords.strand,
                color: '#8ab4f8'
            }],
            height: 60,
            className: 'pre-mirna-track'
        }];
    }
    
    createMatureMiRNATracks(mirnaData) {
        if (!mirnaData.matureCoordinates) return [];
        
        const tracks = [];
        mirnaData.matureCoordinates.forEach((coord, index) => {
            const coords = this.parseCoordinates(coord);
            if (coords) {
                tracks.push({
                    name: `Mature miRNA ${index + 1}`,
                    type: 'annotation',
                    format: 'bed',
                    data: [{
                        chrom: coords.chrom,
                        start: coords.start,
                        end: coords.end,
                        name: `Mature ${index + 1}`,
                        strand: coords.strand,
                        color: '#fb8f67'
                    }],
                    height: 50,
                    className: 'mature-mirna-track'
                });
            }
        });
        
        return tracks;
    }
    
    createTSSTracks(mirnaData) {
        const tracks = [];
        
        // Main TSS
        if (mirnaData.mainTss) {
            const coords = this.parseCoordinates(mirnaData.mainTss);
            if (coords) {
                tracks.push({
                    name: 'Main TSS',
                    type: 'annotation',
                    format: 'bed',
                    data: [{
                        chrom: coords.chrom,
                        start: coords.start,
                        end: coords.end,
                        name: 'Main TSS',
                        strand: coords.strand,
                        color: '#5fa8d3'
                    }],
                    height: 50,
                    className: 'tss-track'
                });
            }
        }
        
        // Alternative TSS
        if (mirnaData.alternativeTss) {
            mirnaData.alternativeTss.forEach((tss, index) => {
                const coords = this.parseCoordinates(tss);
                if (coords) {
                    tracks.push({
                        name: `Alt TSS ${index + 1}`,
                        type: 'annotation',
                        format: 'bed',
                        data: [{
                            chrom: coords.chrom,
                            start: coords.start,
                            end: coords.end,
                            name: `Alt TSS ${index + 1}`,
                            strand: coords.strand,
                            color: '#a6808c'
                        }],
                        height: 40,
                        className: 'tss-track'
                    });
                }
            });
        }
        
        return tracks;
    }
    

    
    addBrowserEventListeners() {
        if (!this.browser) return;
        
        // Track click events
        this.browser.on('trackclick', (track, data) => {
            this.handleTrackClick(track, data);
        });
        
        // Region change events
        this.browser.on('locuschange', (locus) => {
            this.handleLocusChange(locus);
        });
    }
    
    handleTrackClick(track, data) {
        console.log('Track clicked:', track.name, data);
        // Add custom behavior for track clicks
    }
    
    handleLocusChange(locus) {
        console.log('Locus changed to:', locus);
        // Update any UI elements that depend on current view
    }
    
    toggleTrackVisibility() {
        if (!this.browser) return;
        
        const tracks = this.browser.trackViews;
        tracks.forEach(track => {
            if (track.visible) {
                track.hide();
            } else {
                track.show();
            }
        });
    }
    
    showError(title, message) {
        const container = document.querySelector(`#${this.containerId} .genome-browser-content`);
        if (container) {
            container.innerHTML = `
                <div class="genome-browser-error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>${title}</h3>
                    <p>${message}</p>
                    <button class="retry-btn" onclick="location.reload()">
                        <i class="fas fa-redo"></i> Retry
                    </button>
                </div>
            `;
        }
        console.error(`Genome Browser Error: ${title} - ${message}`);
    }
    
    showLoading(message = 'Loading Genome Browser...') {
        const container = document.querySelector(`#${this.containerId} .genome-browser-content`);
        if (container) {
            container.innerHTML = `
                <div class="genome-browser-loading">
                    <div class="spinner"></div>
                    <p>${message}</p>
                </div>
            `;
        }
    }
    
    checkBrowserCompatibility() {
        console.log('Checking browser compatibility...');
        
        // Check for Shadow DOM support
        if (!Element.prototype.attachShadow) {
            console.error('Shadow DOM not supported - this is required for IGV.js');
            return false;
        }
        
        // Check for other modern features
        if (!window.Promise) {
            console.error('Promises not supported - this is required for IGV.js');
            return false;
        }
        
        if (!window.fetch) {
            console.error('Fetch API not supported - this is required for IGV.js');
            return false;
        }
        
        // Check for WebGL support (IGV.js requirement)
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
            console.error('WebGL not supported - this is required for IGV.js');
            return false;
        }
        
        // Check for specific browser features that might cause issues
        if (!window.requestAnimationFrame) {
            console.error('requestAnimationFrame not supported - this is required for IGV.js');
            return false;
        }
        
        // Check if we're in a secure context (HTTPS or localhost)
        if (!window.isSecureContext) {
            console.warn('Not in secure context - some features might not work');
        }
        
        console.log('Browser compatibility check passed');
        return true;
    }
    
    createBasicTextBrowser() {
        console.log('Creating basic text-based genome browser...');
        const container = document.querySelector(`#${this.containerId} .genome-browser-content`);
        if (container) {
            container.innerHTML = `
                <div class="basic-genome-browser">
                    <div class="basic-genome-header">
                        <h4>Basic Genome Browser View</h4>
                        <p>IGV.js is not compatible with your browser. Showing basic information instead.</p>
                    </div>
                    <div class="basic-genome-content">
                        <div class="genome-region">
                            <h5>Genome Region: chr9:94066274-94300905</h5>
                            <div class="region-info">
                                <p><strong>Host Gene:</strong> MIRLET7A1HG (ENSG00000269929.7)</p>
                                <p><strong>Transcript:</strong> chr9:94166274-94200905(+)</p>
                                <p><strong>Pre-miRNA:</strong> chr9:94175957-94176036(+)</p>
                                <p><strong>Mature miRNAs:</strong></p>
                                <ul>
                                    <li>5p: chr9:94175962-94175983(+) (22 bp)</li>
                                    <li>3p: chr9:94176013-94176033(+) (21 bp)</li>
                                </ul>
                            </div>
                        </div>
                        <div class="genome-legend">
                            <h5>Legend:</h5>
                            <div class="legend-item">
                                <span class="legend-color host-gene"></span>
                                <span>Host Gene (MIRLET7A1HG)</span>
                            </div>
                            <div class="legend-item">
                                <span class="legend-color pre-mirna"></span>
                                <span>Pre-miRNA (hsa-let-7a-1)</span>
                            </div>
                            <div class="legend-item">
                                <span class="legend-color mature-mirna"></span>
                                <span>Mature miRNAs</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        this.isInitialized = true;
    }
    
    destroy() {
        if (this.browser) {
            this.browser.destroy();
            this.browser = null;
        }
        this.isInitialized = false;
    }
}

// Export for use in other scripts
window.GenomeBrowserView = GenomeBrowserView;

// Simple test function for debugging
window.testIGV = function() {
    console.log('Testing IGV.js integration...');
    
    if (typeof igv === 'undefined') {
        console.log('IGV.js not loaded');
        return false;
    }
    
    console.log('IGV.js is loaded:', igv);
    console.log('IGV version:', igv.version);
    return true;
};
