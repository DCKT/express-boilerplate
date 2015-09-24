'use strict';

let fetch     = require('node-fetch');
let fs        = require('fs');
let { PATHS } = require('../utils/constants');
let path      = require('path');

let name           = process.argv.slice(3)[0];
let type           = process.argv.slice(2)[0];
let camelCasedType = `${type[0].toUpperCase()}${type.slice(1)}`;
let camelCasedName = `${name[0].toUpperCase()}${name.slice(1)}`;
let isModel        = camelCasedType === 'Model';
let baseFileName   = isModel ? 'Book' : `Index${camelCasedType}`;
let url            = `https://raw.githubusercontent.com/DCKT/express-boilerplate/master/app/${type}s/${baseFileName}.js`;
let filePath       = PATHS[type];
let fileName       = isModel ? camelCasedName : `${camelCasedName}${camelCasedType}`;

fs.stat(`${filePath}/${fileName}.js`, exist => {
  exist == null ?  fileExist() : createFile();
});

function createFile() {
  fetch(url)
    .then(res => {
      return res.text();
    })
    .then(body => {

      var file;

      if (isModel) {
        file = body.replace(/books/g, camelCasedName);
      } else {
        file = body.replace(/Home|Index/g, camelCasedName).replace('path: /', `path: /${name.toLowerCase()}`);
      }

      fs.writeFile(`${filePath}/${fileName}.js`, file, (err, data) => {
        if (err) {
          console.error(err);
          return;
        } else {
          console.log('File created !');
        }
      });
    })
    .catch(function(ex) {
      console.log('Something went wrong fetching file', ex);
    });
}

function fileExist() {
  console.log('\n###### WAIT ######');
  console.log(`You already have a route file named : ${fileName}.js`);
}
