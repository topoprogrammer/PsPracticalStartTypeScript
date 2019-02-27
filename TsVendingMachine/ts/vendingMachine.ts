/// <reference path="./coin.ts" />

class VendingMachine {
    private paid = ko.observable(0);
    acceptedCoins: Quarter[] = [new Quarter()];

    //In arrow functions this refers to the object of the class the function is in
    //while in non-arrow function will point to the object that is calling the function (window object)
    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal);
        this.paid(oldTotal + coin.Value);
    }
}  