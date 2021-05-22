"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShitCustomer = void 0;
class ShitCustomer {
    //traditional Approch
    // private _firstName: string;
    // private _lastName: string;
    // constructor(theFirst: string , theLast: string){
    //     this._firstName = theFirst;
    //     this._lastName = theLast;
    // Short Cut
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
exports.ShitCustomer = ShitCustomer;
