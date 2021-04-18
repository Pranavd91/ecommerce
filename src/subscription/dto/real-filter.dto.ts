//import { Transform } from "class-transformer";
import { IsNumber, IsOptional, IsString, IsEnum, IsArray, IsNotEmpty } from 'class-validator';


export class RealFilterSortDto{

  
}

export class RealFilterDto{

  

    @IsOptional()
    status: string;

    @IsOptional()
    phone: number;
    
    @IsOptional()
    productId: number;

   

}