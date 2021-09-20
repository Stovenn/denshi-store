import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ProductCategory } from '../entities/product.entity';
import { IsString, IsNumber } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  readonly name: string;

  @IsString()
  readonly category: ProductCategory;

  @IsString()
  readonly sku: string;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly quantity: number;
}
