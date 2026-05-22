import {
  IsEnum,
} from 'class-validator';

export enum RequestStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export class UpdateStatusDto {
  @IsEnum(RequestStatus)
  status: RequestStatus;
}