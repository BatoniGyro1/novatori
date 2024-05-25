import { Injectable } from '@nestjs/common';
import { CreateProdDto } from './dto/create-prod.dto';
import { UpdateProdDto } from './dto/update-prod.dto';

@Injectable()
export class ProdService {
    student() : boolean{
      return true;
    }
    product() : boolean {
      return true;
    }

    meeting() : boolean {
      return true;
    }

}
