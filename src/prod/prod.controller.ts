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
  
  @Patch()
  studentchange(@Body() data : UpdateProdDto) : boolean {
    return this.prodService.patchstudent()
  }
 
  @Post()
  product(@Body() data: CreateProdDto) : boolean {
    return this.prodService.product();
  }

  @Patch()
  productchange(@Body() data : UpdateProdDto) : boolean {
    return this.prodService.patchproduct()
  }

  @Post()
  meeting(@Body() data: CreateProdDto) : boolean {
    return this.prodService.meeting();
  }

  @Patch()
  meetingchange(@Body() data : UpdateProdDto) : boolean {
    return this.prodService.patchmeeting()
  }


}
