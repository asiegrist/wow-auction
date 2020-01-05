const fs = require('fs');
var ws = require('windows-shortcuts');
const parseLua = (data) => 
  data.replace(/\[(.*)\]\s\=\s/g,'$1:')     // change equal to colon & remove outer brackets
    .replace(/[\t\r\n]/g,'')              // remove tabs & returns
    .replace(/\}\,\s--\s\[\d+\]\}/g,']]') // replace sets ending with a comment with square brackets
    .replace(/\,\s--\s\[\d+\]/g,',')      // remove close subgroup and comment
    .replace(/,(\}|\])/g,'$1')            // remove trailing comma
    .replace(/\}\,\{/g,'],[')             // replace curly bracket set with square brackets
    .replace(/\{\{/g,'[[')                // change double curlies to square brackets
    .replace(/.*\=/, '')

export default (req, res) => {
  ws.query('Auc-Stat-Simple.lua.lnk', (error, options) => {

  fs.readFile(options.target, 'utf8', (err, data) => {
    if (err) console.error(err);
    if (data) {
      const luaJson = JSON.parse(parseLua(data));
      res.status(200).json(luaJson.RealmData.Finkle);
    }

    res.status(200);
  });

})

};