import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto";

//extends partialType means all properties become optional now
//比如只用传name 一个也是ok 的
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto){
    //? means optional 
    // readonly name?:string
    // readonly brand?:string
    // readonly flavors?:string[]
}
