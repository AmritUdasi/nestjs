import { Injectable } from "@nestjs/common";
import {Product} from './product.module'
@Injectable()
export class ProductService {
    private products: Product[]=[];

    insertProduct(title:string,desc:string,price:number){
        const ProdId=new Date().toString();
        const newProduct=new Product(ProdId,title,desc,price);
        this.products.push(newProduct)
        return ProdId;
    }

    getProducts(){
        return [...this.products]
    }
}