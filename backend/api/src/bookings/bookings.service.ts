import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateBookingDto) {
    return this.prisma.serviceRequest.create({
      data: {
        category: dto.category,
        description: dto.description,
        clientId: dto.clientId,
      },
    });
  }

  findAll() {
    return this.prisma.serviceRequest.findMany({
      include: {
        client: true,
      },
    });
  }
}