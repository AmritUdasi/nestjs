import { Injectable, CACHE_MANAGER,Inject, Patch, Logger,HttpException,HttpStatus, Body} from "@nestjs/common";
import { Cache } from 'cache-manager'
import {Repository} from 'typeorm'
import { Details } from './entities/details.entity'
import {InjectRepository} from '@nestjs/typeorm'
import { CreateDetailsDto } from "./dto/create-detail.dto";
import { DetailsDto } from "./dto/Details.dto";
import axios from 'axios'

@Injectable()
export class DetailsService {
    constructor( @InjectRepository(Details) private readonly DetailRepository:Repository<Details>){}
    async create(){
        var axiosdata = async  () => {
            var response = await axios.get("https://jsonplaceholder.typicode.com/comments");
            return response.data;
        };
        var data = await axiosdata();
        for(let k in data){
            let prod:Details = new Details();
            if(data[k].postId!=null){
                prod.postid=data[k].postId;
            }else{
                prod.postid=999;
            }
            prod.name=data[k].name
            prod.email=data[k].email
            prod.body=data[k].body
            this.DetailRepository.save(prod);
        }
        return data;
    }
    findall():Promise<Details[]>{
        return this.DetailRepository.find();
    }
    remove(postid:number){
        return this.DetailRepository.delete(postid);
    }
}