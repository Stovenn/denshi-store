import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;

  const mockRepository = () => ({
    createProduct: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
