// Converts the originals in docs/Image/ to optimised WebP copies in public/images/.
// Run with: npm run images
import sharp from 'sharp'
import { mkdir, stat } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = (p) => join(root, 'docs', 'Image', p)
const out = (p) => join(root, 'public', 'images', p)
const quality = 80

// Portrait: crop to 5:6 from the top (keeps head and shoulders), export at 800x960.
const portrait = async () => {
  const img = sharp(src('Me/portfolio_donker.jpg'))
  const { width, height } = await img.metadata()
  const cropHeight = Math.min(height, Math.round((width * 6) / 5))
  return img
    .extract({ left: 0, top: 0, width, height: cropHeight })
    .resize(800, 960)
    .webp({ quality })
    .toFile(out('portrait.webp'))
}

// Screenshots: keep the full image, 1600px wide. Cropping happens in the card (imagePosition).
const shot = (from, to) =>
  sharp(src(from)).resize({ width: 1600, withoutEnlargement: true }).webp({ quality }).toFile(out(to))

await mkdir(out('projects'), { recursive: true })

const jobs = [
  ['portrait.webp', portrait],
  ['projects/medical-annotation-tool.webp', () => shot('Projects/Medical-annotation-tool.png', 'projects/medical-annotation-tool.webp')],
  ['projects/personal-tracker.webp', () => shot('Projects/Personal-Tracker.png', 'projects/personal-tracker.webp')],
  ['projects/portfolio.webp', () => shot('Projects/Portfolio.png', 'projects/portfolio.webp')],
]

for (const [name, run] of jobs) {
  try {
    await run()
    const { size } = await stat(out(name))
    console.log(`${name}  ${(size / 1024).toFixed(0)} KB`)
  } catch (e) {
    console.warn(`skipped ${name}: ${e.message}`)
  }
}
