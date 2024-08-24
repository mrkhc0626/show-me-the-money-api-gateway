import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { BalanceSheetService } from './services/balance.service';
import { BalanceSheetController } from './controllers/balance.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true, // Make configuration available in every module
    }),
  ],
  controllers: [AppController, BalanceSheetController],
  providers: [AppService, BalanceSheetService],
})
export class AppModule {}
