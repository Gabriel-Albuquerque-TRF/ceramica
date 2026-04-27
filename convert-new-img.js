const sharp = require('sharp');
sharp('assets/ceramic_cat_tray.png')
  .webp({ quality: 80 })
  .toFile('assets/ceramic_cat_tray.webp')
  .then(() => console.log('Done'))
  .catch(err => console.error(err));
