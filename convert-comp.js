const sharp = require('sharp');
async function convert() {
  await sharp('assets/comp_traditional.png').webp({ quality: 80 }).toFile('assets/comp_traditional.webp');
  await sharp('assets/comp_modern.png').webp({ quality: 80 }).toFile('assets/comp_modern.webp');
  console.log('Done');
}
convert();
