import { IsDate, IsString, Max, Min } from "class-validator";
import { CreateProdDto } from "./create-prod.dto";
import { Type } from "class-transformer";

export class meeting {
    @Min(3)
    @Max(255)
    @IsString()
    title: string

    @IsDate()
    @IsString()
    date: string;

    @Type(() => CreateProdDto)
    mentor: CreateProdDto

    @Type(() => CreateProdDto)
    students: CreateProdDto[];
}