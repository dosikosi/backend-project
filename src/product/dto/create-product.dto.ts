import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsOptional, IsNumberString } from 'class-validator';

export class CreateProductDto {
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
  @IsString()
  name: string = 'Название';

  @ApiProperty()
  @Type(() => String)
  @IsString()
  @IsOptional() // Make description optional
  description?: string;

  @ApiProperty()
  @IsNumberString()
  price: number;

  @ApiProperty()
  @IsNumberString()
  categoryId: number;
}
