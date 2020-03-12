import { Movie } from './Movie.Class.js';
export class BuyableMovie extends Movie { // EXTEND keyword means we are INHERITING all methods and properties from the ORIGINAL class (Movie, in this case.)
    get getPrice () {
        return this.price;
    }
    set setPrice ( price ) {
        this.price = parseFloat( price );
    }
}