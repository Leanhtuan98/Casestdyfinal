class Product {

    name
    price
    priceOld
    image

    constructor(name, price, priceOld, image) {
        this.name = name;
        this.price = price;
        this.priceOld = priceOld;
        this.image = image;
    }


    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get price() {
        return this.price;
    }

    set price(value) {
        this.price = value;
    }

    get priceOld() {
        return this.priceOld;
    }

    set priceOld(value) {
        this.priceOld = value;
    }

    get image() {
        return this.image;
    }

    set image(value) {
        this.image = value;
    }
}