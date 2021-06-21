function logger(a: number, b: string) {
    console.log(`Number 1: ${a}, string 2: ${b}`)
}

let a = 12;
let b = "Sup fuckers";
logger(a, b);

interface IPerson {
    name: string
}

interface IAddress {
    address: string
}

function loggerV2(person: IPerson, address: IAddress) {
    console.log(`Person: ${person.name}, Address: ${address.address}`)
}

const person = {name: "Peter"};
const address = {address: "HELL"};
loggerV2(person, address);

class Person implements IPerson {
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    constructor(private _name: string) {
        this._name = _name
    }
}

let p = new Person("Hebert");
loggerV2(p, address);

function loggerV3<T, U>(a:T, b:U) {
    console.log(`a: ${a}. b: ${b}`)
}

loggerV3<number, string>(a, b);

class GenericLogger<T, U> {
    log = (a:T, b:U) => console.log(`a: ${JSON.stringify(a)}, b: ${JSON.stringify(b)}`)
}

const logger1 = new GenericLogger<number, string>();
const logger2 = new GenericLogger<IPerson, IAddress>();
logger1.log(a, b);
logger2.log(p, address);
