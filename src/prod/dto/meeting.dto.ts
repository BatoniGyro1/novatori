import { IsArray, IsDate, IsDateString, IsString, Max, MaxLength, Min, MinLength, ValidateNested } from "class-validator";
import { CreateProdDto } from "./create-prod.dto";
import { Type } from "class-transformer";

export class meeting {
    @MinLength(3)
    @MaxLength(255)
    @IsString()
    title: string

    @IsDateString()
    date: string;

    @Type(() => CreateProdDto)
    mentor: CreateProdDto

    @IsArray()
    @ValidateNested({each:true})
    @Type(() => CreateProdDto)
    students: CreateProdDto[];
}