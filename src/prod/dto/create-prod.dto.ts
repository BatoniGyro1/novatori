import { IsEmail, IsEnum, IsNumber, IsOptional, IsPhoneNumber, IsString, Max, Min, isIn } from "class-validator";


export class CreateProdDto{
    @IsString()
    @Max(15)
    @Min(3)
    firstName: string;

    @IsString()
    @Max(15)
    @Min(3)
    lastName: string;

    @IsEmail()
    email: string;

    @IsNumber()
    @Max(65)
    @Min(12)
    age: number;

    @IsPhoneNumber()
    phone: number

    @IsEnum(['male' , 'female'])
    gender: 'male' | 'female';


}
