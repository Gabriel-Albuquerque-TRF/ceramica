const sharp = require('sharp');
const fs = require('fs');

const images = [
  'module_1', 'module_2', 'module_3', 'module_4', 'module_5', 'module_6'
];

async function convert() {
  for (const img of images) {
    try {
      await sharp(`assets/${img}.png`)
        .webp({ quality: 80 })
        .toFile(`assets/${img}.webp`);
      console.log(`Converted ${img}`);
    } catch (err) {
      console.error(`Error converting ${img}:`, err);
    }
  }
}

convert();
