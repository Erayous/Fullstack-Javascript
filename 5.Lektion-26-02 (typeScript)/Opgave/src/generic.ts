function reverseArr<T>(array: Array<T>) {
    return array.reverse();
}

console.log(reverseArr<string>(["A", "B", "C"]));
console.log(reverseArr<number>([1, 2, 3]));
console.log(reverseArr<boolean>([true, true, false]));

class DataHolder<T> {
    private _value: T;

    constructor(value: T) {
        this._value = value;
    }

    get value(): T {
        return this._value;
    }

    set value(value: T) {
        this._value = value;
    }
}

let d = new DataHolder<string>("FUCK");
console.log(d.value);
d.value = ("SSHIT");
console.log(d.value);
