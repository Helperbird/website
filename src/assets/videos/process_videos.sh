#!/bin/bash

# Loop over each MP4 file in the current directory
for file in *.mp4; do
  # Run ffmpeg command on each file
  ffmpeg -i "$file" -c:v libx264 -c:a aac -strict experimental "temp_$file"
  
  # Overwrite the original file
  mv "temp_$file" "$file"
done
