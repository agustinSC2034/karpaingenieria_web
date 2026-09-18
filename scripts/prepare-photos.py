"""Conservative, reproducible enlargement. Never modifies source photographs.

Requires Pillow. No generative model, object reconstruction or color changes.
"""
from pathlib import Path
import json
from PIL import Image, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'img'
OUTPUT = SOURCE / 'hd'
PUBLIC = ROOT / 'public' / 'images'
OUTPUT.mkdir(parents=True, exist_ok=True)
manifest = []


def enlarge(source, destination):
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert('RGB')
        width, height = image.size
        scale = 3 if max(width, height) <= 800 else 2
        resized = image.resize((width * scale, height * scale), Image.Resampling.LANCZOS)
        # Low-strength edge sharpening, not synthetic texture/detail generation.
        resized = resized.filter(ImageFilter.UnsharpMask(radius=0.7, percent=45, threshold=3))
        resized.save(destination, 'WEBP', quality=93, method=6)
        manifest.append({'source': source.relative_to(ROOT).as_posix(),
                         'output': destination.relative_to(ROOT).as_posix(),
                         'original_size': [width, height], 'output_size': list(resized.size),
                         'scale': scale, 'method': 'Lanczos + soft unsharp mask; no generative AI'})


for path in sorted(SOURCE.iterdir()):
    if path.name == 'segundo-anillo-sur-original.webp':
        continue
    if path.suffix.lower() not in {'.jpg', '.jpeg', '.png', '.webp'}:
        continue
    with Image.open(path) as image:
        needs_enlargement = max(image.size) <= 1200
    if needs_enlargement:
        enlarge(path, OUTPUT / f'{path.stem}.webp')

mapping = {
    'erp-002.webp': 'planta-reguladora.webp',
    'IMG-20191108-WA0041.webp': 'equipos-propios.webp',
    '20161222_105000.webp': 'obra-gasoducto.webp',
    'equipo-industrial-vertical.webp': 'equipo-industrial-vertical.webp',
    'equipo-industrial-horizontal.webp': 'equipo-industrial-horizontal.webp',
    'tiendetubos-en-obra.webp': 'tiendetubos-en-obra.webp',
}
for enlarged, public_name in mapping.items():
    (PUBLIC / public_name).write_bytes((OUTPUT / enlarged).read_bytes())

# The brochure extract has its own preserved original, independent of web output.
brochure_original = SOURCE / 'segundo-anillo-sur-original.webp'
if not brochure_original.exists():
    brochure_original.write_bytes((PUBLIC / 'segundo-anillo-sur.webp').read_bytes())
enlarge(brochure_original, OUTPUT / 'segundo-anillo-sur.webp')
(PUBLIC / 'segundo-anillo-sur.webp').write_bytes((OUTPUT / 'segundo-anillo-sur.webp').read_bytes())
(OUTPUT / 'manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'{len(manifest)} photos enlarged. Originals preserved. Public photographs updated.')
