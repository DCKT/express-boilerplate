import fetch from 'node-fetch';
import fs from 'fs';
import { PATHS } from '../utils/constants';
import path from 'path';

var name       = process.argv.slice(2)[0],
uppercasedName = `${name[0].toUpperCase()}${name.slice(1)}`,
url            = `https://raw.githubusercontent.com/DCKT/express-boilerplate/master/app/routes/IndexRoute.js`;



fs.stat(`${PATHS.routes}/${uppercasedName}Route.js`, exist => {
  console.log(exist)
  exist == null ?  fileExist() : createFile()
});


function createFile () {
  fetch(url)
    .then(res => {
      return res.text();
    })
    .then(body => {
      var file = body.replace(/Home|Index/g, uppercasedName);

      fs.writeFile(`${PATHS.routes}/${uppercasedName}Route.js`, file, (err, data) => {
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
  console.log(`You already have a route file named : ${uppercasedName}Route.js`);
}