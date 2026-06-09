"""
Sellobay logo extraction — tight crop.
Faqat app icon — vizit/sumka qirralarisiz.
"""

from PIL import Image
import os

SOURCE = r'C:\Users\user\Desktop\Gemini_Generated_Image_46k6tw46k6tw46k6.png'
PROJECT_ROOT = r'C:\Users\user\Desktop\E-Commerce\Online shop'

img = Image.open(SOURCE).convert('RGBA')
W, H = img.size
print(f'Source: {W}x{H}')

# Manual crop — vizual inspekitsiya asosida
# App icon markazi rasmda taxminan (725, 250), o'lcham ~340x340
# Tightroq crop — qirralar yo'q
CENTER_X = 725
CENTER_Y = 255
SIZE = 340  # half-side*2

x_min = CENTER_X - SIZE // 2
y_min = CENTER_Y - SIZE // 2
x_max = CENTER_X + SIZE // 2
y_max = CENTER_Y + SIZE // 2

print(f'Tight crop: ({x_min}, {y_min}) -> ({x_max}, {y_max})')

icon = img.crop((x_min, y_min, x_max, y_max))
print(f'Cropped: {icon.size}')

# Saqlash papkalari
TARGETS = ['apps/web/public', 'apps/admin/public', 'apps/seller/public']

# Kerakli o'lchamlar
SIZES = [
    ('sellobay-icon-512.png', 512),
    ('sellobay-icon-192.png', 192),
    ('sellobay-icon-180.png', 180),
    ('sellobay-icon-64.png', 64),
    ('sellobay-icon-32.png', 32),
]

for target_rel in TARGETS:
    target_dir = os.path.join(PROJECT_ROOT, target_rel)
    os.makedirs(target_dir, exist_ok=True)
    for filename, size in SIZES:
        out_path = os.path.join(target_dir, filename)
        resized = icon.resize((size, size), Image.LANCZOS)
        resized.save(out_path, 'PNG', optimize=True)
    print(f'Done: {target_rel}')

print('All done!')
