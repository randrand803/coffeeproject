import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService: CoffeesService){}
    

    @Get()
    findAll(){
          return 'return all coffee';
    }

    @Get('/queryCoffee')
    findAllQuery(@Query() paginationQuery){
        //const {limit, offset} = paginationQuery  
        //return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
        return this.coffeeService.findAll()
    }

    @Get('/flavor')
    findFlavor(){
          return 'coco flavor';
    }

    @Get(':id')
    findOne(@Param('id')id:string){
        //return `this coffee id is ${id}`
        return this.coffeeService.findOne(id)
    }

    @Post()
    @HttpCode(HttpStatus.GONE)
    create(@Body('name') createCoffeeDto:CreateCoffeeDto){
        return this.coffeeService.create(createCoffeeDto)
    }

    @Patch(':id')
    update(@Param('id')id:string,@Body() updateCoffeeDto:UpdateCoffeeDto){
       // return `this action updates ${id} coffee`
       return this.coffeeService.update(id, updateCoffeeDto)
    }

    @Delete(':id')
    remove(@Param('id') id:string){ 
        //return `this action removes #${id} coffee`
        return this.coffeeService.remove(id)
    }
}
