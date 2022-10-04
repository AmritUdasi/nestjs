import {IsString,IsNumber,IsDefined} from "class-validators"
 
export class DetailsDto{
    @IsNumber()
    postid:number;

    @IsNumber()
    @IsDefined()
    id:number;

    @IsString()
    @IsDefined()
    name:string;

    @IsString()
    @IsDefined()
    email:string;

    @IsString()
    @IsDefined()
    body:string;

    
}