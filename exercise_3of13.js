var fs = require('fs')
var contents = fs.readFileSync('macintosh hd/users/ftl/dev475/learnyounode')
var lines = contents.toString().split('n').length - 1
console.log(lines);
