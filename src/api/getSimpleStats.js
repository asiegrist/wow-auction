const fs = require('fs');
const ws = require('windows-shortcuts');

import parseLua from './utils/luaParse'

const getFile = (resolve) => (err, dataString) => {
  if (err) console.error('error', err);

  if (dataString) {
    console.log('parsed')
    const dailyData = JSON.parse(parseLua(dataString));
    resolve(dailyData.RealmData.Finkle)
  }
}

const getLuaJson = ({ linkname, filename }) => console.log('getLuaJson') || new Promise((resolve, reject) => {
  if (linkname) {
    ws.query(linkname, (error, options) => {
      const luaPath = `${options.target}/${filename}`

      fs.readFile(luaPath, 'utf8', getFile(resolve));
    })
  } else {
    fs.readFile(filename, 'utf8', getFile(resolve));
  }
})

const luaJson = getLuaJson({linkname: 'data/SavedVariables.lnk', filename: 'Auc-Stat-Simple.lua'})
// const luaJson = getLuaJson({ filename: 'data/Auc-Stat-Simple.test.lua' })

export default () => luaJson