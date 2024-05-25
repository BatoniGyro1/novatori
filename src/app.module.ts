import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ProdModule } from './prod/prod.module';

@Module({
  imports: [ProductsModule, ProdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
