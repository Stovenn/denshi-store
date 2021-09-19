import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ExistsMiddleware } from 'src/middlewares/exists.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ExistsMiddleware)
      .exclude(
        { path: 'products', method: RequestMethod.GET },
        { path: 'products', method: RequestMethod.POST },
        { path: 'products/categories', method: RequestMethod.GET },
      )
      .forRoutes(ProductsController);
  }
}
