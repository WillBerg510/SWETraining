const fs = require('fs');

if (!fs.existsSync('./new')) {
  fs.mkdir('./new', function (err) {
    if (err) throw err;
    console.log('Directory created');
  })
}

if (fs.existsSync('./new')) {
  fs.rmdir('./new', function (err) {
    if (err) throw err;
    console.log('Directory removed');
  })
}