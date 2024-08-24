import { Controller, Get } from '@nestjs/common';
import { BalanceSheetService } from '../services/balance.service';

@Controller()
export class BalanceSheetController {
  constructor(private readonly balanceSheetService: BalanceSheetService) {}

  @Get('/v1/balance-sheet')
  getBalanceSheet() {
    return this.balanceSheetService.getBalanceSheet();
  }
}
