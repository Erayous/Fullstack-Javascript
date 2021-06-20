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
    return "Hej, " + person.firstName+  " " + person.lastName 
}

let user = new Student("Jane", "M", "User")

document.body.textContent = greeter(user)
console.log(greeter(user))