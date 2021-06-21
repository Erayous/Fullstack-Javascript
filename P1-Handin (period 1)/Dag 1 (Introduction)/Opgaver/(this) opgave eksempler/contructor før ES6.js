function Car(make, model) {
  this.make = make;
  this.model = model;

  this.showThis = function () {
    console.log(this);
  };
  this.show = function () {
    console.log(`${this.make}, ${this.model}`);
  };
  this.showAsync = function () {
    setTimeout(function () {
      console.log(this.make + ", " + this.model);
    }, 0);
  };
}
const car1 = new Car("Fiat", "Punto");
const car2 = new Car("Chevrolet", "Spark");

car1.showAsync();
car2.showAsync(); 