import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseArrayPipe, DefaultValuePipe, ValidationPipe, HttpStatus, ParseUUIDPipe } from '@nestjs/common';
import { ProdService } from './prod.service';
import { CreateProdDto } from './dto/create-prod.dto';
import { UpdateProdDto } from './dto/update-prod.dto';
import { product } from './dto/product.dto';
import { updateproduct } from './dto/updateproduct.dto';
import { meeting } from './dto/meeting.dto';
import { updatemeeting } from './dto/updatemeeting.dto';

@Controller('prod')
export class ProdController {
  constructor(private readonly prodService: ProdService) {}

  @Post('student')
  stundent(@Body() data: CreateProdDto) : boolean {
    return this.prodService.student();
  }
  
  @Patch('student')
  studentchange(@Body() data : UpdateProdDto) : boolean {
    return this.prodService.patchstudent()
  }
 
  @Post('product')
  product(@Body() data: product) : boolean {
    return this.prodService.product();
  }

  @Patch('product')
  productchange(@Body() data : updateproduct) : boolean {
    return this.prodService.patchproduct()
  }

  @Post('meeting')
  meeting(@Body() data: meeting) : boolean {
    return this.prodService.meeting();
  }

  @Patch('meeting')
  meetingchange(@Body() data: updatemeeting) : boolean {
    return this.prodService.patchmeeting()
  }


}
