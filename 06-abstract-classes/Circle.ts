import { Shape } from "./Shape";

export class Circle extends Shape{
   
    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    } 

    //子類別Circle 繼承 父類別 Shape
    constructor(theX: number , theY: number, 
                private _radius:number){

        super(theX,theY) //把值傳回 父類別（Shape）的 _x & _y
    }

    public get radius(): number{
        return this._radius;
    }
    
    public set radius(value: number){
       this._radius = value;
    }

    getInfo(): string{
        return super.getInfo() + `, radius=${this._radius}`;  //super 代表取得父類別getInfo的參數（line 8） 
    }
}