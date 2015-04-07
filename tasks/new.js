import fetch from 'node-fetch';
import fs from 'fs';
import { PATHS } from '../utils/constants';
import path from 'path';


var name       = process.argv.slice(3)[0],
type           = process.argv.slice(2)[0],
camelCasedType = `${type[0].toUpperCase()}${type.slice(1)}`,
camelCasedName = `${name[0].toUpperCase()}${name.slice(1)}`,
isModel        = camelCasedType === "Model",
baseFileName   = isModel ? "Book" : `Index${camelCasedType}`,
url            = `https://raw.githubusercontent.com/DCKT/express-boilerplate/master/app/${type}s/${baseFileName}.js`,
filePath       = PATHS[type],
fileName       = isModel ? camelCasedName : `${camelCasedName}${camelCasedType}`;

fs.stat(`${filePath}/${fileName}.js`, exist => {
  exist == null ?  fileExist() : createFile()
});


function createFile () {
  fetch(url)
    .then(res => {
      return res.text();
    })
    .then(body => {

      var file;

      if (isModel) {
        file = body.replace(/books/g, camelCasedName);
      }
      else {
        file = body.replace(/Home|Index/g, camelCasedName).replace('path: /', `path: /${name.toLowerCase()}`);
      }

      fs.writeFile(`${filePath}/${fileName}.js`, file, (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        else {
          console.log("File created !")
        }
      });
    })
    .catch(function(ex) {
      console.log('Something went wrong fetching file', ex)
    }); 
}

function fileExist () {
  console.log("\n###### WAIT ######");
  console.log(`You already have a route file named : ${fileName}.js`);
}