import {
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateBookingDto {
  @IsString()
  category: string;

  @IsString()
  description: string;

  @IsUUID()
  clientId: string;
}