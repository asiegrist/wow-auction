export default (dataString) => 
  dataString.replace(/\["(.*?)"\]\s\=\s/g,'"$1":')    // change equal to colon & remove outer brackets for string
    .replace(/\[(.*?)\]\s\=\s/g,'"$1":')              // change equal to colon & remove outer brackets for number
    .replace(/\{((\s*\d*,?)*)\}/g,'[$1]')             //change list to table
    .replace(/\{\s*\[(.*)\]\s*\}/g,'[[$1]]')          // replace object with table by table of table
    .replace(/\}\,\s--\s\[\d+\]\}/g,']]')             // replace sets ending with a comment with square brackets
    .replace(/\,\s--\s\[\d+\]/g,',')                  // remove close subgroup and comment
    .replace(/\}\,\{/g,'],[')                         // replace curly bracket set with square brackets
    .replace(/\}\}/g,']]')                            // change double curlies to square brackets
    .replace(/\{\{/g,'[[')                            // change double curlies to square brackets
    .replace(/\[\["/g,'[{"')                            // change double curlies to square brackets
    .replace(/\{\[/g,'[[')                            // change {[ to square brackets
    .replace(/[\t\r\n]/g,'')                          // remove tabs & returns
    .replace(/,(\}|\])/g,'$1')                        // remove trailing comma
    .replace(/.*?\=/, '')