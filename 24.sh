#!/bin/bash

# Set the directory to search (current directory by default)
SEARCH_DIR="${1:-.}"

# Size threshold in MB
SIZE_THRESHOLD=24

echo "Searching for files larger than ${SIZE_THRESHOLD} MB in: $SEARCH_DIR"
echo ""
echo "Files found:"
echo "============================================"

COUNT=0

# Find files larger than 24MB
while IFS= read -r -d '' file; do
    ((COUNT++))
    size=$(du -h "$file" | cut -f1)
    size_bytes=$(stat -f%z "$file")
    echo "[$COUNT] $file"
    echo "    Size: $size ($size_bytes bytes)"
    echo ""
done < <(find "$SEARCH_DIR" -type f -size +${SIZE_THRESHOLD}M -print0)

echo "============================================"
echo "Total files found: $COUNT"