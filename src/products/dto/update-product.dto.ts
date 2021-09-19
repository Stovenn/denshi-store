import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ProductCategory } from '../entities/product.entity';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  readonly name: string;
  readonly category: ProductCategory;
  readonly sku: string;
  readonly price: number;
  readonly quantity: number;
}
