import { IsString } from "class-validator";


export class CreateProductDto {
    @IsString()
    category : string;

    @IsString()
    color : string;

    @IsString()
    size : string;

    @IsString()
    brand : string;

}
