import {
  Controller,
  Get,
  Patch,
  Param,
} from '@nestjs/common';

import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService
  ) {}

  @Get('users')
  findAllUsers() {
    return this.adminService.findAllUsers();
  }

  @Get('requests')
  findAllRequests() {
    return this.adminService.findAllRequests();
  }

  @Patch('requests/:id/approve')
  approveRequest(@Param('id') id: string) {
    return this.adminService.approveRequest(id);
  }

  @Patch('requests/:id/reject')
  rejectRequest(@Param('id') id: string) {
    return this.adminService.rejectRequest(id);
  }

  @Patch('providers/:id/verify')
  verifyProvider(@Param('id') id: string) {
    return this.adminService.verifyProvider(id);
  }
}