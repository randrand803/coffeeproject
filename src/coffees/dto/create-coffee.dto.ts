import { IsString } from "class-validator"

export class CreateCoffeeDto {
    //string is required, otherwise it will response 400 code 
    @IsString()
    readonly name:string
    @IsString()
    readonly brand:string
    @IsString({ each:true})
    readonly flavors:string[]
}
