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

  @Column({ nullable: false })
  name: string;

  @Column({
    type: 'enum',
    enum: ProductCategory,
    nullable: false,
    default: ProductCategory.EMPTY,
  })
  category: ProductCategory;

  @Column({ nullable: false })
  sku: string;

  @Column({ type: 'float', nullable: false })
  price: number;

  @Column({ nullable: false })
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
