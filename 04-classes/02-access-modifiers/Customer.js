"use strict";
class MaxCustomer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
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
let myMaxCustomer = new MaxCustomer("Yanxin", "Wynne");
console.log(myMaxCustomer.firstName);
console.log(myMaxCustomer.lastName);
