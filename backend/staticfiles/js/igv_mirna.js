// Lightweight wrapper to initialize igv.js for a miRNA page.
// Expects 1-based input coords; converts starts to 0-based for igv.js.

export async function initMiRNABrowser({
  containerId = "igv-container",
  genome = "hg38",
  chr,
  tss,                 // number, 1-based
  alt_tss = [],        // optional array of numbers (1-based)
  host = null,         // { name, strand, tx_start, tx_end, exons?: [{start,end}], cds_start?, cds_end? } (1-based)
  pre,                 // { name, strand, start, end } (1-based)
  matures = [],        // [{ name, strand, start, end }, ...] (1-based)
  bigBedUrl,           // URL to bigBed for current genome
  padding = 5000
}) {
  if (!window.igv) {
    throw new Error("igv.js not loaded. Include igv.min.js before calling initMiRNABrowser.");
  }
  if (!chr || !tss || !pre) {
    throw new Error("Missing required fields: chr, tss, pre.");
  }
  
  // Validate that igv.createBrowser is available
  if (typeof igv.createBrowser !== 'function') {
    throw new Error("igv.createBrowser function not available. Check IGV.js version compatibility.");
  }

  const coords = [
    pre.start, pre.end,
    ...(host ? [host.tx_start, host.tx_end] : []),
    ...matures.flatMap(m => [m.start, m.end]),
    ...alt_tss
  ].filter(Number.isFinite);

  const locusStart = Math.max(1, Math.min(...coords) - padding);
  const locusEnd   = Math.max(...coords) + padding;

  // Build tracks
  const tracks = [];

  if (bigBedUrl) {
    tracks.push({
      name: "GENCODE genes",
      format: "bigBed",
      url: bigBedUrl,
      displayMode: "EXPANDED",
      visibilityWindow: 200000
    });
  }

  if (host) {
    const feature = {
      chr,
      start: host.tx_start - 1,
      end: host.tx_end,
      name: host.name,
      strand: host.strand
    };
    if (host.exons && Array.isArray(host.exons) && host.exons.length) {
      feature.exons = host.exons.map(e => ({ start: e.start - 1, end: e.end }));
      if (host.cds_start && host.cds_end) {
        feature.thickStart = host.cds_start - 1;
        feature.thickEnd = host.cds_end;
      } else {
        feature.thickStart = feature.start;
        feature.thickEnd = feature.start;
      }
    }
    tracks.push({
      type: "annotation",
      name: "Host gene",
      color: "#8b5cf6",
      displayMode: "EXPANDED",
      features: [feature]
    });
  }

  tracks.push({
    type: "annotation",
    name: "pre-miRNA",
    color: "#22c55e",
    displayMode: "EXPANDED",
    features: [{
      chr, start: pre.start - 1, end: pre.end, name: pre.name, strand: pre.strand
    }]
  });

  if (matures.length) {
    tracks.push({
      type: "annotation",
      name: "Mature miRNAs",
      color: "#f59e0b",
      displayMode: "EXPANDED",
      features: matures.map(m => ({
        chr, start: m.start - 1, end: m.end, name: m.name, strand: m.strand
      }))
    });
  }

  const roi = [{
    name: "Main TSS",
    chr, start: tss - 1, end: tss,
    color: "rgba(239,68,68,0.25)"
  }];
  if (alt_tss && alt_tss.length) {
    alt_tss.forEach((pos, i) => {
      roi.push({
        name: `Alt TSS ${i + 1}`,
        chr, start: pos - 1, end: pos,
        color: "rgba(59,130,246,0.25)"
      });
    });
  }

  const config = {
    genome,
    locus: `${chr}:${locusStart}-${locusEnd}`,
    showCursorGuide: true,
    roi,
    tracks
  };

  const el = document.getElementById(containerId);
  if (!el) throw new Error(`Container #${containerId} not found`);
  
  // Validate container element
  if (!(el instanceof HTMLElement)) {
    throw new Error(`Container #${containerId} is not a valid HTML element: ${typeof el}`);
  }
  
  // Clear the container before creating the browser
  el.innerHTML = '';
  
  console.log('Creating IGV browser with config:', config);
  console.log('Container element:', el);
  console.log('IGV object:', igv);
  console.log('IGV.createBrowser type:', typeof igv.createBrowser);
  
  try {
    const browser = await igv.createBrowser(el, config);
    console.log('IGV browser created successfully:', browser);
    return browser;
  } catch (error) {
    console.error('IGV browser creation failed:', error);
    console.error('Error stack:', error.stack);
    throw error;
  }
}
