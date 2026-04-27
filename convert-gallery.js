const sharp = require('sharp');
const images = [1,2,3,4,5,6,7,8];
async function convert() {
  for (const i of images) {
    try {
      await sharp(`assets/gallery_${i}.png`).webp({ quality: 80 }).toFile(`assets/gallery_${i}.webp`);
      console.log(`Converted gallery_${i}`);
    } catch (e) { console.error(e); }
  }
}
convert();
