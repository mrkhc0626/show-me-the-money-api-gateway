import { Test, TestingModule } from '@nestjs/testing';
import { BalanceSheetService } from '../src/services/balance.service';
import { HttpService } from '@nestjs/axios';
import { throwError } from 'rxjs';

describe('BalanceSheetService', () => {
  let service: BalanceSheetService;
  let httpService: HttpService;

  beforeEach(async () => {
    const mockHttpService = {
      get: jest.fn()
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BalanceSheetService,
        { provide: HttpService, useValue: mockHttpService }
      ],
    }).compile();

    service = module.get<BalanceSheetService>(BalanceSheetService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch balance sheet data correctly', async () => {
    const result = {
      status: 200,
      data: { balance: '1000' }
    };
    const data = await service.getBalanceSheet();
    expect(data).toEqual(result.data);
    expect(httpService.get).toHaveBeenCalledWith('http://localhost:6001/api.xro/2.0/Reports/BalanceSheet');
  });

  it('should handle errors', async () => {
    const errorMessage = 'Failed to fetch data';
    // httpService.get.mockReturnValue(throwError(() => new Error(errorMessage))); 

    await expect(service.getBalanceSheet()).rejects.toThrow(errorMessage);
  });
});