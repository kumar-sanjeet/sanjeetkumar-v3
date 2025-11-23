import os
from PIL import Image

# 1. Define the files strictly for the "Fallback List"
files_to_optimize = [
    "togaf.png", "cgeit.png", "cobit.png", "ltsa.png", 
    "robotiqa.png", "al-futtaim.png", "rakbank.png", "iit.png"
]

# 2. Process them
for filename in files_to_optimize:
    try:
        # Check if file exists
        if os.path.exists(filename):
            name, ext = os.path.splitext(filename)
            
            # Open and convert
            with Image.open(filename) as img:
                # Convert to RGBA for transparency
                img = img.convert("RGBA")
                
                # Save as optimized WebP
                output_name = f"{name}.webp"
                img.save(output_name, "webp", quality=90, method=6)
                print(f"✅ Converted: {filename} -> {output_name}")
                
                # Optional: Delete original PNG if you are brave
                # os.remove(filename) 
        else:
            print(f"⚠️ Missing: {filename}")
            
    except Exception as e:
        print(f"❌ Error on {filename}: {e}")

print("\nProcessing Complete! You can now use the .webp versions.")