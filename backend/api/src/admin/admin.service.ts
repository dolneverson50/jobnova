import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  findAllUsers() {
    return this.prisma.user.findMany();
  }

  findAllRequests() {
    return this.prisma.serviceRequest.findMany({
      include: {
        client: true,
      },
    });
  }

  approveRequest(id: string) {
    return this.prisma.serviceRequest.update({
      where: { id },
      data: {
        status: 'ACCEPTED',
      },
    });
  }

  rejectRequest(id: string) {
    return this.prisma.serviceRequest.update({
      where: { id },
      data: {
        status: 'CANCELLED',
      },
    });
  }

  verifyProvider(id: string) {
    return this.prisma.user.update({
      where: { id },
      data: {
        isVerified: true,
      },
    });
  }
}