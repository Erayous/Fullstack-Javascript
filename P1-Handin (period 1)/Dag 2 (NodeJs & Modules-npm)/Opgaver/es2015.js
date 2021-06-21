

function test(a, b) {
  return a + b;
}

let test2 = (a, b) => a + b;

console.log(test(1, 2));
console.log(test2(5, 5));

const navn = ["Morten", "Vang"];
console.log(navn.map((x) => x.length));

function myFunc(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

myFunc(1, 2, 4, 5, 6, 7, 8);

let obj = {
  first: "Morten",
  last: "Vang",
  age: 30,
};

let { first, age } = obj;
console.log(first);
console.log(age);

let arr = [1, 2, 3, 4, 5];
let [y, z] = arr;

console.log(y);
console.log(z);

let myMap = new Map();

myMap.set(1, "Marcus");
myMap.set(2, "Morten");

console.log(myMap);

console.log(myMap.get(3));

let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);

let x = 1;

if (x === 1) {
  let x = 2;
  console.log(x);
}
console.log(x);
