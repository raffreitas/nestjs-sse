import { Module } from '@nestjs/common';
import { ReportsModule } from './reports/reports.module';
import { PrismaModule } from './prisma/prisma.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    ReportsModule,
    PrismaModule,
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
  ],
})
export class AppModule {}

// Model View Controller
