class MaxCustomer{

    private _firstName: string;
    private _lastName: string;


    constructor(theFirst: string , theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
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
let myMaxCustomer = new MaxCustomer("Yanxin","Wynne");


console.log(myMaxCustomer.firstName);
console.log(myMaxCustomer.lastName);
