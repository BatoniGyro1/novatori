import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Secondtype } from './dto/secondtype.dto';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getmethod(@Query() query : CreateProductDto) : string {
    return this.productsService.getmethod(query)
  }

  @Get(':id')
  getmethodone(@Param('id') id : string) : string {
    return this.productsService.getmethodone(id);
  }

  @Post()
  postmethod(@Body() data : Secondtype) : string {
    return this.productsService.postmethod(data);
  }
  

  @Put(':id')
  putmethod(@Body() body : Secondtype, @Param('id') id : string) : string {
    return this.productsService.putmethod(body, id);
  }

  @Delete(':id')
  deletemethod(@Param('id') id : string) : string {
    return this.productsService.deletemthod(id);
  }

}
