const sharp = require('sharp');
sharp('assets/gifts_new.png')
  .webp({ quality: 80 })
  .toFile('assets/gifts_new.webp')
  .then(() => console.log('Done'))
  .catch(err => console.error(err));
