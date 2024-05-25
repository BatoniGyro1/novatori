import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseArrayPipe, DefaultValuePipe, ValidationPipe, HttpStatus, ParseUUIDPipe } from '@nestjs/common';
import { ProdService } from './prod.service';
import { CreateProdDto } from './dto/create-prod.dto';
import { UpdateProdDto } from './dto/update-prod.dto';

@Controller('prod')
export class ProdController {
  constructor(private readonly prodService: ProdService) {}

  @Post()
  stundent(@Body() data: CreateProdDto) : boolean {
    return this.prodService.student();
  }

  @Post()
  product(@Body() data: CreateProdDto) : boolean {
    return this.prodService.product();
  }

  @Post()
  meeting(@Body() data: CreateProdDto) : boolean {
    return this.prodService.meeting();
  }


}
