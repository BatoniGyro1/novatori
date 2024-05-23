import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Secondtype } from './dto/secondtype.dto';

@Injectable()
export class ProductsService {
  getmethod(query : CreateProductDto) : string {
    return `თქვენ მოითხოვეთ ყველა ${query.color} სია, რომელის ზომაცაა ${query.size} და ბრენდია ${query.brand}`;
  }

  getmethodone(id : string) : string {
    
    return `თქვენ მოითოვეთ პროდუქტის ინფორმაცია, რომლის id არის #${id}`;
  }

  postmethod(data : Secondtype) : string {
    console.log(data);
    
    return `დამატებულია პროდუქტი პარამეტრებით ${Object.values(data)}`;
  }

  putmethod(data: Secondtype, id : string) {
    return `განახლებულია პროდუქტი #${id} პარამეტრებით: ${Object.values(data)}`
  }
  
  deletemthod(id : string) {
    return `წაშლილია პროდუქტი #${id}`;
  }

}
