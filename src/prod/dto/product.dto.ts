import { IsArray, IsNumber, IsPositive, IsString, IsUrl, Max, MaxLength, Min, MinLength } from "class-validator";
import { isFloat32Array } from "util/types";

export class product {
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    title: string;

    @IsPositive()
    @IsNumber()
    price: number;

    @IsString()
    @MinLength(150)
    description: string

    @IsArray()
    @IsString({each:true})
    colors: string[];

    @IsUrl()
    image: string;


}