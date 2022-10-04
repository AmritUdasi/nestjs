import { CacheModule, Module } from "@nestjs/common";
import { DetailsController } from "./details.controller";
import { DetailsService } from "./details.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Details } from './entities/details.entity';

@Module({
    imports:[CacheModule.register({
        isGlobal:true
    }),
    TypeOrmModule.forFeature([Details])],
    controllers:[DetailsController],
    providers:[DetailsService]
})

export class DetailModule {}