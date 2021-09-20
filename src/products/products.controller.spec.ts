import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product, ProductCategory } from './entities/product.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ProductsController', () => {
  let productController: ProductsController;
  let productService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: {
            create: jest.fn(),
            find: jest.fn().mockResolvedValue([
              {
                id: '1',
                name: 'Iphone X',
                sku: 'xxxccc',
                category: ProductCategory.SMARTPHONES,
                price: 1000,
                quantity: 1,
              },
              {
                id: '2',
                name: 'Ipad Pro',
                sku: 'fsfcwc',
                category: ProductCategory.TABLETS,
                price: 1400,
                quantity: 1,
              },
              {
                id: '3',
                name: 'MacBook Pro 2019',
                sku: 'gfdsfd',
                category: ProductCategory.COMPUTERS,
                price: 2300,
                quantity: 1,
              },
              {
                id: '4',
                name: 'Valorant',
                sku: 'lsdsfs',
                category: ProductCategory.GAMES,
                price: 40,
                quantity: 1,
              },
            ]),
            findOne: jest.fn().mockImplementation((id: string) =>
              Promise.resolve({
                id,
                name: 'Valorant',
                sku: 'lsdsfs',
                category: ProductCategory.GAMES,
                price: 40,
                quantity: 1,
              }),
            ),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    productController = module.get<ProductsController>(ProductsController);
    productService = module.get<ProductsService>(ProductsService);
  });

  describe('findAll Products', () => {
    it('should return an array of products', async () => {
      const result = await productController.findAll();
      expect(result).toEqual([
        {
          id: '1',
          name: 'Iphone X',
          sku: 'xxxccc',
          category: ProductCategory.SMARTPHONES,
          price: 1000,
          quantity: 1,
        },
        {
          id: '2',
          name: 'Ipad Pro',
          sku: 'fsfcwc',
          category: ProductCategory.TABLETS,
          price: 1400,
          quantity: 1,
        },
        {
          id: '3',
          name: 'MacBook Pro 2019',
          sku: 'gfdsfd',
          category: ProductCategory.COMPUTERS,
          price: 2300,
          quantity: 1,
        },
        {
          id: '4',
          name: 'Valorant',
          sku: 'lsdsfs',
          category: ProductCategory.GAMES,
          price: 40,
          quantity: 1,
        },
      ]);
    });
  });

  describe('findOne Product', () => {
    it('should return an array of products', async () => {
      const result = await productController.findOne('4');
      expect(result).toEqual({
        id: '4',
        name: 'Valorant',
        sku: 'lsdsfs',
        category: ProductCategory.GAMES,
        price: 40,
        quantity: 1,
      });
    });
  });

  it('should be defined', () => {
    expect(productController).toBeDefined();
  });
});
