const fs = require('fs');
const path = require('path');

function generatePage(callback) {
  fs.readdir(path.resolve(__dirname, 'audio'), (err, data) => {
    if (err) throw err;
    const audioFiles = data.map(file => {
      return file.split('.')[0];
    });
    let forms = '';
    for (let i = 0; i < audioFiles.length; i++) {
      forms += `<form action="/api/soundboard" method="POST">
      <input type="hidden" name="play" value="${audioFiles[i]}">
      <button type="submit">${audioFiles[i]}</button>
    </form>`
    };
    fs.readFile(path.resolve(__dirname, 'template', 'soundboardTemplate.html'), 'utf8', (err, data) => {
      if (err) throw err;
      let newData = data.replace('{{BODY}}', forms);
      fs.writeFile(path.resolve(__dirname, 'soundboard.html'), newData, err => {
        if (err) throw err;
        callback();
      });
    });
  });
};

module.exports = generatePage;