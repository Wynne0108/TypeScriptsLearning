class MineCustomer{

    firstName: string;
    lastName: string;

    constructor(theFirst: string , theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

//let's create an instance
let miiCustomer = new MineCustomer("Yanxin","Wynne");


console.log(miiCustomer.firstName);
console.log(miiCustomer.lastName);
