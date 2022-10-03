import {IsString,IsNumber,IsDefined} from "class-validators"
 
export class ProductDto{
    @IsNumber()
    @IsDefined()
    id:number;

    @IsString()
    @IsDefined()
    title:string;


    @IsString()
    @IsDefined()
    description:string;

    @IsNumber()
    @IsDefined()
    price:number;
}