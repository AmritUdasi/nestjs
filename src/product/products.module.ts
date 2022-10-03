import { CacheModule, Module } from "@nestjs/common";
import { ProductsController } from "./product.controller";
import { ProductService } from "./product.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
    imports:[CacheModule.register({
        isGlobal:true
    }),
    TypeOrmModule.forFeature([Product])],
    controllers:[ProductsController],
    providers:[ProductService]
})

export class ProductModule {}