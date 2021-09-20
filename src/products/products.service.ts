import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductCategory } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create(createProductDto);
    if (await this.productRepository.findOne({ sku: createProductDto.sku })) {
      throw new BadRequestException('SKU already exists in DB');
    }
    return await this.productRepository.save(newProduct);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: string): Promise<Product> {
    return this.productRepository.findOne(id);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const existingProduct = await this.productRepository.findOne({
      sku: updateProductDto.sku,
    });

    if (existingProduct && existingProduct.id != id) {
      throw new BadRequestException('SKU already exists in DB');
    }

    return this.productRepository.update(id, updateProductDto);
  }

  async remove(id: string): Promise<string> {
    await this.productRepository.delete(id);
    return `Product ${id} has been successfully deleted`;
  }

  /**
   *  Method that loop through the ProductCategory enum and return an array that contains each of its values
   */
  async getProductsCategories(): Promise<string[]> {
    const categories: string[] = [];

    for (const category in ProductCategory) {
      categories.push(category.valueOf());
    }

    return categories;
  }
}
