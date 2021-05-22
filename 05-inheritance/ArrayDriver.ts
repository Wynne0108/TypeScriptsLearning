import { Shape } from './Shape'
import { Circle } from './Circle'
import { Rectangle } from './Rectangle';

let myShape = new Shape( 10, 15);
// console.log(myShape.getInfo());

let myCircle = new Circle( 5 , 10 , 20);
// console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0,0,3,7);
// console.log(myRectangle.getInfo());

//declare an array of shape ... initially empty
let theShape: Shape[] = [];

//add the shape to the array
theShape.push(myShape)
theShape.push(myCircle)
theShape.push(myRectangle)

for (let tempShape of theShape){
    console.log(tempShape.getInfo());
}

