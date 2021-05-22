"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 15);
// console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(5, 10, 20);
// console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
// console.log(myRectangle.getInfo());
//declare an array of shape ... initially empty
let theShape = [];
//add the shape to the array
theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRectangle);
for (let tempShape of theShape) {
    console.log(tempShape.getInfo());
}
