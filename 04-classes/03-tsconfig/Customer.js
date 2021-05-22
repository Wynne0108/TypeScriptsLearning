"use strict";
class MiniCustomer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
        //Short Cut
        // constructor(private _firstName:string,
        //     private _lastName:string){
        // }
    }
    //firstName get / set
    get firstName() {
        return this.firstName = this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    //LastName get / set
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
//let's create an instance
let myMiniCustomer = new MiniCustomer("Yanxin", "Wynne");
console.log(myMiniCustomer.firstName);
console.log(myMiniCustomer.lastName);
