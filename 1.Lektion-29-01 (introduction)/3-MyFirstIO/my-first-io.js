var fs = require('fs')  
       
var minfil = fs.readFileSync(process.argv[2])  
var lines = minfil.toString().split('\n').length - 1  
console.log(lines)