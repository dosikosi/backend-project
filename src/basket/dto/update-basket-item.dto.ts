import { PartialType } from '@nestjs/swagger';
import { CreateBasketDto } from './create-basket-item.dto';

export class UpdateBasketDto extends PartialType(CreateBasketDto) {}