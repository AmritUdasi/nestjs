import { Controller, Post,Body, Get,CacheModule, Delete,Param, Patch} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { Updateproddto } from "./dto/update-prod.dto";
import { ProductService } from "./product.service";
@Controller ('products')
export class ProductsController{
    constructor(private readonly productsService:ProductService) {}
    @Post()
    create(@Body() createprodDto:CreateProductDto){
        return this.productsService.create(createprodDto);
    }
    @Get()
    findall(){
        return this.productsService.findall();
    }
    @Patch(':id')
    update(@Param('id') id:string,@Body() updateproddto:Updateproddto){
        return this.productsService.update(+id,updateproddto);
    }
    @Delete(':id')
    remove(@Param ('id') id:number){

        return this.productsService.remove(+id);
    }
}