const fs = require('fs');
const ws = require('windows-shortcuts');

import parseLua from './utils/luaParse'

const getFile = (resolve) => (err, dataString) => {
      if (err) console.error('error', err);

      if (dataString) {

        // console.log(dataString)
        try {
          console.log(parseLua(dataString))
          console.log('parsed')
          resolve(parseLua(dataString));
        } catch (err) {
          throw err
        }
        
        // resolve(JSON.parse(parseLua(dataString)));
      }
    }

const getLuaJson = ({linkname, filename}) => new Promise((resolve, reject) => {
  if(linkname) {
    ws.query(linkname, (error, options) => {
      const luaPath = `${options.target}/${filename}`

      fs.readFile(luaPath, 'utf8', getFile(resolve));
    })
  } else {
    fs.readFile(filename, 'utf8', getFile(resolve));
  }
 })

// fs.readFile('data/profession.test.lua', 'utf8', (err, dataString) => {
//   if (err) console.error('error', err);

//   if (dataString) {

//     // console.log(dataString)
//     try {
//       console.log(parseLua(dataString))
//       console.log('parsed')
//       // resolve(parseLua(dataString));
//     } catch (err) {
//       throw err
//     }

//   }
// });
//  const luaJson = getLuaJson({linkname: 'SavedVariables.lnk', filename: 'Auc-Stat-Simple.lua'})
//  const luaJson = getLuaJson({filename: 'data/Auc-Stat-Simple.test.lua'})
 const luaJson = getLuaJson({filename: 'data/source.lua'})
//  const luaJson = getLuaJson({filename: 'data/profession.test.lua'})

export default (req, res) => {
  // console.log(luaJson)
  // res.status(200)
  luaJson.then((data) => {
    console.log('promise', data)
    res.status(200).send(data);
    // res.status(200).json(data);
  })
  // res.status(200)
};