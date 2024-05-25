import { IsArray, IsNumber, IsPositive, IsString, IsUrl, Max, Min } from "class-validator";
import { isFloat32Array } from "util/types";

export class product {
    @IsString()
    @Min(3)
    @Max(255)
    title: string;

    @IsPositive()
    @IsNumber()
    price: number;

    @IsString()
    @Min(150)
    description: string

    @IsArray()
    @IsString({each:true})
    colors: string[];

    @IsUrl()
    image: string;

    
}