abstract class Shape {
  #color: string;
  constructor(color: string) {
    this.#color = color;
  }

  get color() {
    return this.#color;
  }
  set color(color: string) {
    this.#color = color;
  }
  abstract get toString(): string;
  abstract get area(): number;
  abstract get perimeter(): number;
}

class Circle extends Shape {
  #radius: number;

  constructor(radius: number, color: string) {
    super(color);
    this.#radius = radius;
  }

  get toString(): string {
    return "The Circle is " + this.color + " and the radius is " + this.radius;
  }
  get area(): number {
    return Math.PI * this.#radius ** 2;
  }
  get perimeter(): number {
    return Math.PI * 2 * this.#radius;
  }
  get radius(): number {
    return this.#radius;
  }
}

let c = new Circle(100, "Red");

console.log(c.area);
console.log(c.perimeter);
console.log(c.toString);
console.log(c.radius);

class Cylinder extends Circle {
  #height: number;

  constructor(height: number, color: string, radius: number) {
    super(radius, color);
    this.#height = height;
  }
  get toString(): string {
    return (
      "The cylinder is " +
      this.color +
      " and the height is " +
      this.#height +
      " and radius is " +
      this.radius
    );
  }
  get area(): number {
    return 2 * Math.PI + this.#height * (2 * Math.PI * this.radius);
  }
  get perimeter(): number {
    throw new Error("Method not implemented.");
  }
  get volume(): number {
    return this.#height * Math.PI * this.radius ** 2;
  }
}

let cy = new Cylinder(20, "Yellow", 25);
console.log(cy.radius);
console.log(cy.volume);
console.log(cy.toString);
// let shape = new Shape() da klassen er abstract kan den ikke instensirers! den skal extendes! /Ned arves.
