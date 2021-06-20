// Let feature- Block scoping prøv med Var

let x = 1;

if (x === 1) {
  let x = 2;
  console.log(x);
}
console.log(x);

// Arrow function feature
// this forholder sig anderledes - se P1/Day1/opgaverne/this.js
function test(a, b) {
  return a + b;
}

let test2 = (a, b) => a + b;

console.log(test(1, 2));
console.log(test2(5, 5));

const navn = ["Pelle", "Mathias", "Rasmussen"];
console.log(navn.map((x) => x.length));

// Rest feature

function myFunc(a, b, ...more) {
  console.log(a);
  console.log(b);
  console.log(more);
}

myFunc(1, 2, 4, 5, 6, 7, 8);

// Destructoring

let obj = {
  first: "Pelle",
  last: "Rasmussen",
  age: 30,
};

let { first, age } = obj;
console.log(first);
//console.log(last)
console.log(age);

let arr = [1, 2, 3, 4, 5];
let [y, z] = arr;

console.log(y);
console.log(z);

//Maps/Sets

let myMap = new Map();

myMap.set(1, "John");
myMap.set(2, "Pelle");
myMap.set(3, "Kurt");

console.log(myMap);

console.log(myMap.get(3));

let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
