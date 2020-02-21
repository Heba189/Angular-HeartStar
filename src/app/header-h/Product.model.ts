export class Products {

    public name : string;
    public price :number ;
    public imgUrl :string ;

    constructor( name :string , price :number , imgUrl:string,
       
        ){
        this.name=name;
        this.price=price;
        this.imgUrl =imgUrl;
    }

    order: string = 'price' ;

}