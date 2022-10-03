import { Injectable, CACHE_MANAGER,Inject, Patch, Logger,HttpException,HttpStatus} from "@nestjs/common";
import { Cache } from 'cache-manager'
import {Repository} from 'typeorm'
import { Product } from './entities/product.entity'
import {InjectRepository} from '@nestjs/typeorm'
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductDto } from "./dto/product.dto";
import { Updateproddto } from "./dto/update-prod.dto";
@Injectable()
export class ProductService {
    logger:Logger;
    constructor( @InjectRepository(Product) private readonly productRepository:Repository<Product>){
        this.logger=new Logger();
    }
    create(createproductdto :CreateProductDto): Promise<Product>{
        this.logger.log('created')
        let prod:Product = new Product();
        prod.id=createproductdto.id;
        prod.title=createproductdto.title;
        prod.description=createproductdto.description;
        prod.price=createproductdto.price;
        return this.productRepository.save(prod);
    }

    findall():Promise<Product[]>{
        this.logger.log('foundall')
        return this.productRepository.find();
    }
    update(id:number,updateproddto:Updateproddto){
        this.logger.log('updated')

        let prod:Product = new Product();
        prod.id=id;
        prod.title=updateproddto.title;
        prod.description=updateproddto.description;
        prod.price=updateproddto.price;

        return this.productRepository.save(prod)
    }
    remove(id:number){
        this.logger.warn('Removed')
        return this.productRepository.delete(id);
    }
}