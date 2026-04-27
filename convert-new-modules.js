const sharp = require('sharp');

async function convert() {
  try {
    await sharp('assets/module_4.png').webp({ quality: 80 }).toFile('assets/module_4.webp');
    await sharp('assets/module_6.png').webp({ quality: 80 }).toFile('assets/module_6.webp');
    console.log('Done');
  } catch (err) {
    console.error(err);
  }
}

convert();
