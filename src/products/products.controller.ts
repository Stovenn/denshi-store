import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      const newProduct = await this.productsService.create(createProductDto);
      return newProduct;
    } catch (error) {
      return error.message;
    }
  }

  @Get()
  async findAll() {
    try {
      const products = await this.productsService.findAll();
      return products;
    } catch (error) {
      return error.message;
    }
  }

  @Get('categories')
  async getAllCategories() {
    try {
      const categories = await this.productsService.getProductsCategories();
      return categories;
    } catch (error) {
      return error.message;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const product = await this.productsService.findOne(id);
      return product;
    } catch (error) {
      return error.message;
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    try {
      const updatedProduct = this.productsService.update(id, updateProductDto);
      return updatedProduct;
    } catch (error) {
      return error.message;
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
