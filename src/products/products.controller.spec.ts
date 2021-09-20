import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ProductsController', () => {
  let productController: ProductsController;
  //let productService: ProductsService;

  const mockRepository = () => ({
    create: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: mockRepository,
        },
      ],
    }).compile();

    productController = module.get<ProductsController>(ProductsController);
    //productService = module.get<ProductsService>(ProductsService);
  });

  // describe('createProduct', () => {
  //   it('should create a new product in the DB', async () => {
  //     const createProductDto: CreateProductDto = {
  //       name: 'sample name',
  //       category: ProductCategory.EMPTY,
  //       sku: 'SAMPLESKU',
  //       price: 100,
  //       quantity: 10,
  //     };

  //     const result = await productController.create(createProductDto);
  //     expect(result).toEqual('someProduct');
  //   });
  // });

  it('should be defined', () => {
    expect(productController).toBeDefined();
  });
});
