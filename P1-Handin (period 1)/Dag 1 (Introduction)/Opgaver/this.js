

const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};
console.log(test.func());


let person = {
  firstName: "Morten",
  lastName: "Vang",
  id: 1,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

let person2 = {
  firstName: "Nathali",
  lastName: "Vang",
  id: 1337,
  minFunc: function () {
    return this;
  },
};

console.log(person2.minFunc()); 








