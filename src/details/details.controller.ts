import { Controller, Post,Body, Get,CacheModule, Delete,Param, Patch} from "@nestjs/common";
import { CreateDetailsDto } from "./dto/create-detail.dto";
import { DetailsService } from "./details.service";
import axios from 'axios'
@Controller ('details')
export class DetailsController{
    constructor(private readonly productsService:DetailsService) {}
    @Post()
    create(){
        return this.productsService.create();
    }
    @Get()
    findall(){
        return this.productsService.findall();
    }
    @Delete(':id')
    remove(@Param ('id') id:number){
        return this.productsService.remove(+id);
    }
}