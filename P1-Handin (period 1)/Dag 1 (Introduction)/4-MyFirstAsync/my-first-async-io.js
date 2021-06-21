var fs = require('fs')  
var file = process.argv[2]  
  
fs.readFile(file, function (err, minfil) {  
  var lines = minfil.toString().split('\n').length - 1  
  console.log(lines)  
})