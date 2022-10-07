import { Injectable, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/entities/product.entity'
import { Details } from './details/entities/details.entity';
import { DetailModule } from './details/details.module';
import { DetailsService } from './details/details.service';

@Module( {
  imports: [ProductModule,DetailModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port:5433,
      username: 'postgres',
      password: 'kaggle',
      database: 'mydb',
      entities:[Product,Details],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
