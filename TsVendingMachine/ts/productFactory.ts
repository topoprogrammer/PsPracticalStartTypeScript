/// <reference path="Product.ts" />

class productFactory {
    static GetProduct(): CocaCola {
        return new CocaCola();
    }
}
