"use strict";
function logger(a, b) {
    console.log(`Number 1: ${a}, string 2: ${b}`);
}
let a = 12;
let b = "Sup fuckers";
logger(a, b);
function loggerV2(person, address) {
    console.log(`Person: ${person.name}, Address: ${address.address}`);
}
const person = { name: "Peter" };
const address = { address: "HELL" };
loggerV2(person, address);
class Person {
    constructor(_name) {
        this._name = _name;
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let p = new Person("Hebert");
loggerV2(p, address);
function loggerV3(a, b) {
    console.log(`a: ${a}. b: ${b}`);
}
loggerV3(a, b);
class GenericLogger {
    constructor() {
        this.log = (a, b) => console.log(`a: ${JSON.stringify(a)}, b: ${JSON.stringify(b)}`);
    }
}
const logger1 = new GenericLogger();
const logger2 = new GenericLogger();
logger1.log(a, b);
logger2.log(p, address);
//# sourceMappingURL=logger.js.map