"use strict";
class car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 100000;
    }
    getactualMillage() {
        const realMilage = this._millage + 500000;
        return realMilage;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new car('toyota', 100000);
const TotalPrice = toyota.getTotalPrice(25);
