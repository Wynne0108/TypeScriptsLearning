export class ShitCustomer{
    //traditional Approch
    // private _firstName: string;
    // private _lastName: string;


    // constructor(theFirst: string , theLast: string){
    //     this._firstName = theFirst;
    //     this._lastName = theLast;

    // Short Cut
    constructor(private _firstName:string,
                private _lastName:string){
    }

    //firstName get / set
    public get firstName(): string{
        return this.firstName = this._firstName;
    }    

    public set firstName(value: string){
        this._firstName = value;
    }
    //LastName get / set
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

}

