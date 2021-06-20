"use strict";
function reverseArr(arr) {
    return arr.reverse();
}
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
console
    .log();
class DataHolder {
    constructor(v) {
        this.value = v;
    }
    get() {
        return this.value;
    }
    set(v) {
        this.value = v;
    }
}
let d = new DataHolder("Hello");
console.log(d.value);
d.set("HAHAH");
console.log(d.value);
let d2 = new DataHolder(123);
console.log(d2.value);
d2.set(500);
console.log(d2.value);
//# sourceMappingURL=generics.js.map