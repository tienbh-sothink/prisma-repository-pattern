import { ProductModule } from './modules/product/product.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [
    ProductModule
  ],
  providers: [],
  controllers: [AppController],
})
export class AppModule {}
