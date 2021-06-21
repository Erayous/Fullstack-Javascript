class CarV2 {
  constructor(make, model) {
    this._make = make; 
    this._model = model;
  }

  async = function () {
    setTimeout(this.print, 1000);
  };

  print = function () {
    console.log(`${this.make}, ${this.model}`);
  };

  get make() {
    return this._make;
  }

  get model() {
    return this._model;
  }

  set make(make) {
    this._make = make;
  }

  set model(model) {
    this._model = model;
  }
}

const car1 = new Car("Fiat", "Punto");
const car2 = new Car("Chevrolet", "Spark");

car1.async();
car1.model = "500";
console.log(car1.make);