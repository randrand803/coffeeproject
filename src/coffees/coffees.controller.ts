import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
//import fetch from 'node-fetch'
import { RequestInfo, RequestInit } from "node-fetch";
import axios from "axios"
import { postTokenBalancesEntity } from './entities/postTokenBalances.entity';
import { preTokenBalancesEntity } from './entities/preTokenBalancesEntity.enity';

const fetch = (url: RequestInfo, init?: RequestInit) =>  import("node-fetch").then(({ default: fetch }) => fetch(url, init));


@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService: CoffeesService){}
    

    @Get()
    findAll(){
          return 'return all coffee';
    }

    @Get('/SolonaAPITest')
    async findSolonaAPITest(@Query() paginationQuery){
        //const response = await axios.get("https://api.solanabeach.io/v1/transaction/5xL5WLj5LjKKux5dNXPCjYqFVYANKxs6xeMygLK79wXy2BLw1xfiTBrJgV6A4hppZn55E37ucq1Dmp5inmrm1qVC")

        const response = await axios.get("https://api.solanabeach.io/v1/transaction/4RDMXa51ieGLpBLLR8m25YjgNyWpZLogCQfcaf4GjXzjPR8bmdSfLpzU1G8x2DmsaESiXGtQzSamM2MUSkq5LXne")
       

        const postTokenBalances = response.data.meta.postTokenBalances as postTokenBalancesEntity[]
        postTokenBalances.forEach(element =>
            console.log(element.mint.name,element.mint.coingeckoId,element.uiTokenAmount.uiAmount)
            )
        
        // const preTokenBalances = response.data.meta.preTokenBalances as preTokenBalancesEntity[]
        // preTokenBalances.forEach(element =>
        //     console.log(element.mint.name,element.mint.coingeckoId,element.uiTokenAmount.uiAmount)
        //     )

       
        //return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
        return null
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
        //
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
