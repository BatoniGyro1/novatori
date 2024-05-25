import { IsEmail, IsEnum, IsNumber, IsOptional, IsPhoneNumber, IsString, Max, MaxLength, Min, MinLength, isIn } from "class-validator";


export class CreateProdDto{
    @IsString()
    @MaxLength(15)
    @MinLength(3)
    firstName: string;

    @IsString()
    @MaxLength(15)
    @MinLength(3)
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
