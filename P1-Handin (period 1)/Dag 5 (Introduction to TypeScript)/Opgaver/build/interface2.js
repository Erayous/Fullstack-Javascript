"use strict";
let s1 = "hej";
let s2 = "med";
let s3 = "dig";
let toArray;
toArray = function (a, b, c) {
    return [a, b, c];
};
console.log(toArray(s1, s2, s3));
let toUpperCase;
toUpperCase = function (a, b, c) {
    return [a, b, c].map((x) => x.toUpperCase());
};
console.log(toUpperCase(s1, s2, s3));
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["a", "b", "c"];
    console.log(f1(a, b, c));
};
f2(toArray);
f2(toUpperCase);
//let test = function (a: string, b: number) {
//return [a, b];
//};
//f2(test);
//# sourceMappingURL=interface2.js.map