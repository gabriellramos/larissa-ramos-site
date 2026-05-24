import os
from PIL import Image

def convert_to_webp(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')) and not file.lower().endswith('.webp'):
                filepath = os.path.join(root, file)
                try:
                    img = Image.open(filepath)
                    webp_path = os.path.splitext(filepath)[0] + '.webp'
                    # Convert to RGB if saving to webp to prevent transparency issues if any, but webp supports alpha.
                    img.save(webp_path, 'webp', optimize=True, quality=80)
                    print(f"Converted {filepath} to {webp_path}")
                    os.remove(filepath)
                except Exception as e:
                    print(f"Error converting {filepath}: {e}")

if __name__ == "__main__":
    convert_to_webp("public")
