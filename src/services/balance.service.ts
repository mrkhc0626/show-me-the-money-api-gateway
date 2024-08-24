// balance-sheet.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BalanceSheetService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async getBalanceSheet(): Promise<any> {
    const apiHost =
      this.configService.get<string>('XERO_API_HOST') || 'http://localhost:6001';
    const url = `${apiHost}/api.xro/2.0/Reports/BalanceSheet`;
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch balance sheet data');
    }
  }
}
