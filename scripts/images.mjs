// Converts the originals in docs/images/ to optimised WebP copies in public/images/.
// Run with: npm run images
import sharp from 'sharp'
import { access, mkdir, stat } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = (p) => join(root, 'docs', 'images', p)
const out = (p) => join(root, 'public', 'images', p)
const quality = 80

// Portrait: crop to 5:6 from the top (keeps head and shoulders), export at 800x960.
const portrait = async (input, output) => {
  const img = sharp(input)
  const { width, height } = await img.metadata()
  const cropHeight = Math.min(height, Math.round((width * 6) / 5))
  await img.extract({ left: 0, top: 0, width, height: cropHeight }).resize(800, 960).webp({ quality }).toFile(output)
}

// Screenshots: keep the full image, 1600px wide. Cropping happens in the card (imagePosition).
const screenshot = (input, output) =>
  sharp(input).resize({ width: 1600, withoutEnlargement: true }).webp({ quality }).toFile(output)

// To add or replace an image, edit this list.
const jobs = [
  { from: 'Me/portfolio_donker.jpg', to: 'portrait.webp', convert: portrait },
  { from: 'Projects/Gatekeeper Project.png', to: 'projects/gatekeeper.webp', convert: screenshot },
  { from: 'Projects/Medical-annotation-tool.png', to: 'projects/medical-annotation-tool.webp', convert: screenshot },
  { from: 'Projects/Personal-Tracker.png', to: 'projects/personal-tracker.webp', convert: screenshot },
  { from: 'Projects/Portfolio.png', to: 'projects/portfolio.webp', convert: screenshot },
]

let failed = 0
for (const { from, to, convert } of jobs) {
  const input = src(from)
  try {
    await access(input)
  } catch {
    console.error(`Missing ${relative(root, input)}: add the file or remove it from the list in scripts/images.mjs.`)
    failed++
    continue
  }
  try {
    await mkdir(dirname(out(to)), { recursive: true })
    await convert(input, out(to))
    const { size } = await stat(out(to))
    console.log(`${to}  ${(size / 1024).toFixed(0)} KB`)
  } catch (e) {
    console.error(`Could not convert ${from}: ${e.message}`)
    failed++
  }
}

console.log(`${jobs.length - failed} of ${jobs.length} images converted${failed ? `, ${failed} failed` : ''}.`)
if (failed) process.exitCode = 1
