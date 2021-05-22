"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(theX, theY, _radius) {
        super(theX, theY); //把值傳回 父類別（Shape）的 _x & _y
        this._radius = _radius;
    }
    get radius() {
        return this.radius;
    }
    set radius(value) {
        this.radius = value;
    }
    getInfo() {
        return super.getInfo() + `, radius=${this._radius}`; //super 代表取得父類別getInfo的參數（line 8） 
    }
}
exports.Circle = Circle;
