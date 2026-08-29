from pathlib import Path
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(r"E:\Projects\hai-fashion\audit\2026-08-29-redesign")
SOURCE_HERO = Path(r"C:\Users\DELL\AppData\Local\Temp\codex-clipboard-500d8c2d-4762-4ce2-8c9f-d41f494a112f.png")
SOURCE_JOURNAL = Path(r"C:\Users\DELL\AppData\Local\Temp\codex-clipboard-5c385dcf-8d26-4eed-9010-86dcb52f94f4.png")
IMPLEMENTATION_HERO = ROOT / "browser" / "home-1440.png"
IMPLEMENTATION_JOURNAL = ROOT / "browser" / "section-journal.png"


def fit(image: Image.Image, box: tuple[int, int]) -> Image.Image:
    copy = image.copy()
    copy.thumbnail(box, Image.Resampling.LANCZOS)
    return copy


def comparison(source: Image.Image, implementation: Image.Image, output: Path, source_label: str) -> None:
    box_w, box_h = 900, 650
    gutter, label_h, pad = 24, 44, 20
    canvas = Image.new("RGB", (box_w * 2 + gutter + pad * 2, box_h + label_h + pad * 2), "#e9e2d8")
    draw = ImageDraw.Draw(canvas)
    font = ImageFont.load_default(size=18)

    for index, (image, label) in enumerate(((source, source_label), (implementation, "HAI FASHION IMPLEMENTATION / 1440 x 1000"))):
        x = pad + index * (box_w + gutter)
        y = pad + label_h
        fitted = fit(image, (box_w, box_h))
        image_x = x + (box_w - fitted.width) // 2
        image_y = y + (box_h - fitted.height) // 2
        canvas.paste(fitted.convert("RGB"), (image_x, image_y))
        draw.rectangle((x, pad, x + box_w, pad + label_h - 4), fill="#241a10")
        draw.text((x + 14, pad + 11), label, fill="#f2eee7", font=font)

    output.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(output, quality=92)


hero = Image.open(SOURCE_HERO).convert("RGB")
# Bỏ chrome trình duyệt khỏi ảnh tham chiếu để chỉ so sánh nội dung website.
hero = hero.crop((0, 270, hero.width, hero.height))
comparison(hero, Image.open(IMPLEMENTATION_HERO).convert("RGB"), ROOT / "qa-hero-comparison.jpg", "THE VALET REFERENCE / SOURCE SCREENSHOT")

journal = Image.open(SOURCE_JOURNAL).convert("RGB")
comparison(journal, Image.open(IMPLEMENTATION_JOURNAL).convert("RGB"), ROOT / "qa-journal-comparison.jpg", "THE VALET JOURNAL REFERENCE / SOURCE SCREENSHOT")
