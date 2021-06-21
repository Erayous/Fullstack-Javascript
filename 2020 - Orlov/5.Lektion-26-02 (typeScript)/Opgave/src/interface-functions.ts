interface IMyFunc {
    (a: string, b: string, c: string): Array<string>
}

let myFunc: IMyFunc;
myFunc = function (a, b, c) {
    return [a, b, c]
};

let myFuncUpper: IMyFunc;
myFuncUpper = function (a, b, c) {
    return [a.toUpperCase(), b.toUpperCase(), c.toUpperCase()]
};

let f2 = function logger(f1: IMyFunc) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["A", "B", "C"];
    console.log(f1(a, b, c));
};

console.log(myFunc("Hey", "threre", "hvg"));
console.log(myFuncUpper("Sup", "abud", "ashup"));

f2(myFunc);
f2(myFuncUpper);

let notMyFunc = function () {
    return "LOL!"
};

// f2(notMyFunc);
