import { Shape } from "./Shape";

export class Circle extends Shape{ //子類別Circle 繼承 父類別 Shape
    
    constructor(theX: number , theY: number, 
                private _radius:number){

        super(theX,theY) //把值傳回 父類別（Shape）的 _x & _y
    }

    public get radius(): number{
        return this.radius;
    }
    
    public set radius(value: number){
       this.radius = value;
    }

    getInfo(): string{
        return super.getInfo() + `, radius=${this._radius}`;  //super 代表取得父類別getInfo的參數（line 8） 
    }
}