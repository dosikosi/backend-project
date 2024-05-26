import { ApiProperty } from '@nestjs/swagger';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Type } from 'class-transformer';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePromoDto {
  @ApiProperty({
    type: 'file',
    properties: {
      file: {
        type: 'string',
        format: 'binary',
      },
    },
  })
  image: Express.Multer.File;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title = 'Милнская вяленая колбаса';

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  driveUnit = 'Белок 12г';

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  typeEngine = 'Жиры 20г';

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  workVoltage = 'Калорийность 228ккал';

  @IsString()
  currency = '₽';
  text: any;
}