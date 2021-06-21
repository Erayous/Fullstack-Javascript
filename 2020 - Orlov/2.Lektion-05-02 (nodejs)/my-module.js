
//Self-invoking function (Kalder sig selv i kapsuleringen)
// (function kurt(){
//     console.log("Hej");
// })()

function kurt(){
     console.log("Hej");
}

module.exports.number = 123;
module.exports.kurt = kurt;
console.log(module);

