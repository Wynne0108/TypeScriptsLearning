class HIICustomer{
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

//let's create an instance
let myHIICustomer = new HIICustomer("Yanxin","Wynne");


console.log(myHIICustomer.firstName);
console.log(myHIICustomer.lastName);
