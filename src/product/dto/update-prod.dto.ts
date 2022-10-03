import { PartialType } from "@nestjs/swagger";
import { CreateProductDto } from "./create-product.dto";

export class Updateproddto extends PartialType(CreateProductDto){
    id: number;
    title:string;
    description:string;
    price:number;
}