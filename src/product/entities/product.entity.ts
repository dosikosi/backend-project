import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { CategoryEntity } from 'src/category/entities/category.entity';
import { ApiHideProperty } from '@nestjs/swagger';
import { BasketItemEntity } from 'src/basket/entities/basket-item.entity';
import { OrderItemEntity } from 'src/order/entities/order-item.entity';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  storage: string;

  @Column()
  composition: string;

  @Column()
  belki: number;

  @Column()
  fat: number;

  @Column()
  calory: number;

  @ManyToOne(() => CategoryEntity, (category) => category.products, {
    eager: true,
  })
  @JoinColumn()
  category: CategoryEntity;

  @Column()
  price: number;

  @Column({ nullable: true }) // Allow null values for description
  description: string;

  @ApiHideProperty()
  @OneToMany(() => BasketItemEntity, (basket) => basket.product)
  basket: BasketItemEntity[];

  @ApiHideProperty()
  @OneToMany(() => OrderItemEntity, (orderItems) => orderItems.product)
  orderItems: BasketItemEntity[]; // Update type to OrderItemEntity here
}