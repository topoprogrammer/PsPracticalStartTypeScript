/// <reference path="./coin.ts" /> Because requirejs module loeader loads with:
import * as Coins from "./coin"
import getVendingProduct from "./productFactory"
import {Product, Initial as Init } from "./product"
/// <reference path="typings/knockout.d.ts" /> Not needed because tsc automatically finds and uses them as along
/// as they are in the project directory structure

/// <reference path="./product.ts" />
/// <reference path="./productFactory.ts" />



export enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor(public product: Product) {

    }

    stock = ko.observable<number>(3);
    sold = ko.observable<boolean>(false);
}

export class VendingMachine {
    paid = ko.observable(0);
    selectedCell = ko.observable(new Cell(new Init));
    cells = ko.observableArray();
    acceptedCoins: Coins.Coin[] = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()];
    canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);

    set size(givenSize: VendingMachineSize) {
        this.cells([]);

        for (let index = 0; index < givenSize; index++) {
            let product = getVendingProduct();
            this.cells.push(new Cell(product));
        }
    }

    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    //In arrow functions this refers to the object of the class the function is in
    //while in non-arrow function will point to the object that is calling the function (window object)
    acceptCoin = (coin: Coins.Coin): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal);
        this.paid(oldTotal + coin.value);
    }

    pay = (): void => {
        if (this.selectedCell().stock() < 1) {
            alert("I'm sorry, we're out of them!")
            return;
        }
        let currentPaid = this.paid();
        this.paid(Math.round(((currentPaid - this.selectedCell().product.price) * 100)) / 100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    }
}  