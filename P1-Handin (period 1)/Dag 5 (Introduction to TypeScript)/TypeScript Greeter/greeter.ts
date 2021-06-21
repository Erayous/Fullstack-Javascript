class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string

    ){
        this.fullName = firstName + " " + middleInitial + " " + lastName
    }
}
interface Person {
    firstName : String;
    lastName : String;
}
function greeter (person: Person) {
    return "Hello, " + person.firstName+  " " + person.lastName 
}
let user = new Student("Morten", "MV", "Vang")

document.body.textContent = greeter(user)
console.log(greeter(user))