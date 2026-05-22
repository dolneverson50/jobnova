import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';
import { BookingsModule } from './bookings/bookings.module';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
  PrismaModule,
  AuthModule,
  UsersModule,
  AdminModule,
  BookingsModule,
LoggerModule.forRoot(),
],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
