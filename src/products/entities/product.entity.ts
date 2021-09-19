import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';

export enum ProductCategory {
  SMARTPHONES = 'Smartphones',
  COMPUTERS = 'Computers',
  GAMES = 'Games',
  TABLETS = 'Tablets',
  EMPTY = 'Empty',
}

@Unique(['sku'])
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ProductCategory,
    default: ProductCategory.EMPTY,
  })
  category: ProductCategory;

  @Column()
  sku: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ nullable: false })
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
