//2) Implement user defined functions that take callbacks as an argument

const { count } = require("console");

let list = ["John", "Bent", "Henning", "Lone"];

function lengthOfName(array) {
  let filteredArray = [];
  array.forEach((element) => {
    if (element.length === 4) {
      filteredArray.push(element);
    }
  });

  return filteredArray;
}

function nameWithOinIt(array) {
  let filteredArray = [];

  array.forEach((element) => {
    if (element.includes("o")) {
      filteredArray.push(element);
    }
  });
  return filteredArray;
}

function myFilter(array, callback) {
  return callback(array);
}

let filteredArray = myFilter(list, lengthOfName);
let filteredArray2 = myFilter(list, nameWithOinIt);
console.log(filteredArray);
console.log(filteredArray2);

console.log("------------------");
console.log("With filter method");

let filteredArray3 = list.filter((x) => x.length === 4);
let filteredArray4 = list.filter((x) => x.includes("o"));
console.log(filteredArray3);
console.log(filteredArray4);

console.log("----------------");
console.log("My Map");

function myMap(array, callback) {
  return callback(array);
}

function td(array) {
  let mapped = [];
  array.forEach((x) => mapped.push(`<td>${x}</td>`));

  return mapped;
}

let mapList = myMap(list, td);
console.log(mapList);

let mapList2 = list.map((x) => `<td>${x}</td>`);
console.log(mapList2);

//3) Using the Prototype property to add new functionality to existing objects

var names = ["Lars", "Peter", "Jan", "Bo"];

function myFilterV2(callback) {
  return callback(array);
}

// The reduce method

//a)
let comma = names.join(",");
let space = names.join(" ");
let hashtag = names.join("#");

console.log("---JOIN-----");
console.log(comma);
console.log(space);
console.log(hashtag);
//b)
console.log("---REDUCER----");
let numbers = [2, 3, 67, 33];

let reducer = (acc, cValue) => acc + cValue;
let totalSum = numbers.reduce(reducer);
console.log(totalSum);

console.log("----------");

//c)
let members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 },
];

let avgAgeReducer = (acc, cValue, index, array) => {
  acc += cValue.age;
  if (index === array.length - 1) {
    return acc / array.length;
  } else {
    return totalSum;
  }
};

let avgAge = members.reduce(avgAgeReducer);
console.log(avgAge);

console.log("---------");

//d)

let votes = [
  "Clinton",
  "Trump",
  "Clinton",
  "Clinton",
  "Trump",
  "Trump",
  "Trump",
  "None",
];

let init = {};

let countVotes = (person, vote) => {
  if (!person[vote]) {
    person[vote] = 1;
  } else {
    person[vote] += 1;
  }
  return person;
};

let countedVotes = votes.reduce(countVotes, init);

console.log(countedVotes);
