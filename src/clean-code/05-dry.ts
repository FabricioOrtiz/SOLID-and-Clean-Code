//Principio DRY
//Si quieres ser un programador productivo
//esfuérzate en escribir código legible
type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string,
        public price: number,
        public size: Size = '',
    ){}

    toString(){
        //No DRY
        if ( this.name.length <= 0 ) throw Error('name is empty');
        if ( this.price <= 0 ) throw Error('price is zero');
        if ( this.size.length <= 0 ) throw Error('size is empty');

        return 
    }

}

(()=>{
    const bluePants = new Product('Blue large pants', 10, 'M');
})