
class car {
    model:string;
    price:number;
    private _millage:number;
    constructor(model:string, price:number){
        this.model = model;
        this.price = price;
        this._millage = 100000;

    }
    getactualMillage():number{
        const realMilage = this._millage + 500000;
        return realMilage;

    }
    getTotalPrice(tax:number):number{
        const taxAmount = this.price * tax/100 ;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new car('toyota', 100000) 
const TotalPrice:number = toyota.getTotalPrice(25)