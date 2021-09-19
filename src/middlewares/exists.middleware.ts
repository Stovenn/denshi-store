import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExistsMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    if (!(await this.productRepository.findOne(req.params.id))) {
      throw new NotFoundException(
        `Product with id ${req.params.id} not found in DB`,
      );
    }
    next();
  }
}
