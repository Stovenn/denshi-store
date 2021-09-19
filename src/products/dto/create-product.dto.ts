import { ProductCategory } from '../entities/product.entity';

export class CreateProductDto {
  readonly name: string;
  readonly category: ProductCategory;
  readonly sku: string;
  readonly price: number;
  readonly quantity: number;
}
