const fs = require('fs');
const path = require('path');

function generateJSON(callback) {
  fs.readdir(path.resolve(__dirname, 'audio'), (err, data) => {
    if (err) throw err;
    callback(data);
  });
}

module.exports = generateJSON