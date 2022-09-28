import { Controller, Post,Body, Get} from "@nestjs/common";
import { ProductService } from "./product.service";
@Controller ('products')
export class ProductsController{
    constructor(private readonly productsService:ProductService) {}
    @Post()
    addProduct(@Body('title') prodTitle:string,@Body('description') ProdDesc:string,@Body('Price') ProdPrice:number): any{
        const generatedId=this.productsService.insertProduct(prodTitle,ProdDesc,ProdPrice);
        return {id:generatedId}
    }
    @Get()
    getAllproducts(){
        return this.productsService.getProducts(); 
    }
}