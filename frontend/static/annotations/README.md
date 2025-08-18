# Genome Browser Annotation Files

This directory contains the annotation files needed for the Genome Browser View in miRGen.

## File Structure

- `gencode.v48.hg38.bigBed` - Human genome (GRCh38/hg38) gene annotations
- `gencode.vM25.mm10.bigBed` - Mouse genome (GRCm39/mm10) gene annotations
- `gencode.vM37.mm39.bigBed` - Mouse genome (GRCm39/mm39) gene annotations

## bigBed Format

The bigBed format is the preferred format for igv.js as it provides efficient access to large annotation datasets. It's a binary format that allows for fast querying and visualization of genomic features.

### Advantages of bigBed over text files:
- **Faster loading**: Binary format loads much faster than text parsing
- **Memory efficient**: Only loads visible regions into memory
- **Better performance**: Optimized for large datasets
- **Native igv.js support**: Built-in handling without custom parsing

```
chrom start end name score strand thickStart thickEnd itemRgb blockCount blockSizes blockStarts
```

### Field Descriptions

- `chrom` - Chromosome name (e.g., chr9)
- `start` - Start position (0-based)
- `end` - End position (1-based)
- `name` - Gene name/symbol
- `score` - Score (usually 0)
- `strand` - Strand (+ or -)
- `thickStart` - Start of coding region
- `thickEnd` - End of coding region
- `itemRgb` - RGB color (0 for default)
- `blockCount` - Number of blocks (exons)
- `blockSizes` - Comma-separated list of block sizes
- `blockStarts` - Comma-separated list of block start positions (relative to gene start)

### Example

```
chr9	94166274	94176036	MIRLET7A1HG	0	+	94166274	94176036	0	3	100,50,100	0,1000,2000
```

This represents a gene on chromosome 9 from position 94,166,274 to 94,176,036 on the positive strand, with 3 exons of sizes 100, 50, and 100 base pairs.

## How to Generate bigBed Files

### Convert from GTF/GFF3

You can convert existing GTF or GFF3 files to bigBed format using UCSC tools:

```bash
# Step 1: Convert the human GTF to genePred using the same flag as before.
gtfToGenePred -genePredExt -geneNameAsName2 gencode.v48.basic.annotation.gtf gencode.gp

# Step 2: Convert the genePred file to a BED file.
genePredToBed gencode.gp gencode.bed

# Step 3: Sort the new BED file.
sort -k1,1 -k2,2n gencode.bed > gencode.sorted.bed

# Step 4: Fetch the chromosome sizes for the hg38 genome.
fetchChromSizes hg38 > hg38.chrom.sizes

# Step 5: Create the final bigBed file using the hg38 chrom.sizes file.
bedToBigBed -type=bed12 gencode.sorted.bed hg38.chrom.sizes gencode.v48.hg38.bigBed

# For mouse (mm10):
# Step 1: Convert the mouse GTF to genePred
gtfToGenePred -genePredExt -geneNameAsName2 gencode.vM25.basic.annotation.gtf gencode.mouse.gp

# Step 2: Convert to BED
genePredToBed gencode.mouse.gp gencode.mouse.bed

# Step 3: Sort
sort -k1,1 -k2,2n gencode.mouse.bed > gencode.mouse.sorted.bed

# Step 4: Fetch mm10 chromosome sizes
fetchChromSizes mm10 > mm10.chrom.sizes

# Step 5: Create bigBed
bedToBigBed -type=bed12 gencode.mouse.sorted.bed mm10.chrom.sizes gencode.vM25.mm10.bigBed
```

## Why bigBed Instead of Text Files?

The bigBed format is significantly better than text files for genome browsers:

1. **Performance**: Loads only visible regions, not entire files
2. **Scalability**: Handles datasets with millions of genes efficiently
3. **Memory**: Uses minimal RAM regardless of file size
4. **Speed**: Binary format enables fast random access
5. **igv.js Native**: Built-in support without custom parsing code
6. **Standard**: Industry standard format used by major genome browsers

## File Requirements

1. **Format**: Must be valid bigBed format (bed12 type recommended)
2. **Coordinates**: Must match the genome build (hg38, mm10)
3. **Index**: bigBed files are self-indexed for fast access
4. **Size**: Can be very large (several GB) without performance issues

## Updating Annotations

When updating annotation files:

1. Ensure the new file follows the bigBed format
2. Update the file path in `genome_browser_script.js` if needed
3. Test with the Genome Browser View
4. Update this README if the format changes

## Troubleshooting

### Common Issues

1. **File not found**: Check the file path in the JavaScript configuration
2. **Format errors**: Ensure the file is a valid bigBed format
3. **Coordinate mismatches**: Verify coordinates match the genome build
4. **Memory issues**: bigBed files are memory-efficient, but very large files may need to be split

### Testing

Test the annotation files by:

1. Loading the Genome Browser View
2. Checking if genes display correctly
3. Verifying intron/exon structure
4. Testing with different miRNAs

## Support

For issues with annotation files or the Genome Browser View, check:

1. Browser console for JavaScript errors
2. Network tab for file loading issues
3. File format compliance
4. Coordinate system consistency
