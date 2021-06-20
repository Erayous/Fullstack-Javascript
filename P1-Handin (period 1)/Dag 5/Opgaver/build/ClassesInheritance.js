"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _color, _radius, _height;
class Shape {
    constructor(color) {
        _color.set(this, void 0);
        __classPrivateFieldSet(this, _color, color);
    }
    get color() {
        return __classPrivateFieldGet(this, _color);
    }
    set color(color) {
        __classPrivateFieldSet(this, _color, color);
    }
}
_color = new WeakMap();
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        _radius.set(this, void 0);
        __classPrivateFieldSet(this, _radius, radius);
    }
    get toString() {
        return "The Circle is " + this.color + " and the radius is " + this.radius;
    }
    get area() {
        return Math.PI * Math.pow(__classPrivateFieldGet(this, _radius), 2);
    }
    get perimeter() {
        return Math.PI * 2 * __classPrivateFieldGet(this, _radius);
    }
    get radius() {
        return __classPrivateFieldGet(this, _radius);
    }
}
_radius = new WeakMap();
let c = new Circle(100, "Red");
console.log(c.area);
console.log(c.perimeter);
console.log(c.toString);
console.log(c.radius);
class Cylinder extends Circle {
    constructor(height, color, radius) {
        super(radius, color);
        _height.set(this, void 0);
        __classPrivateFieldSet(this, _height, height);
    }
    get toString() {
        return ("The cylinder is " +
            this.color +
            " and the height is " + __classPrivateFieldGet(this, _height) +
            " and radius is " +
            this.radius);
    }
    get area() {
        return 2 * Math.PI + __classPrivateFieldGet(this, _height) * (2 * Math.PI * this.radius);
    }
    get perimeter() {
        throw new Error("Method not implemented.");
    }
    get volume() {
        return __classPrivateFieldGet(this, _height) * Math.PI * Math.pow(this.radius, 2);
    }
}
_height = new WeakMap();
let cy = new Cylinder(20, "Yellow", 25);
console.log(cy.radius);
console.log(cy.volume);
console.log(cy.toString);
// let shape = new Shape() da klassen er abstract kan den ikke instensirers! den skal extendes! /Ned arves.
//# sourceMappingURL=ClassesInheritance.js.map