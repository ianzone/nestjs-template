import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateItemDto {
  @ApiProperty()
  @IsString()
  sku: string;

  @ApiProperty()
  @IsNumber()
  price: number;
}
