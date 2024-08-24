import { Test, TestingModule } from '@nestjs/testing';
import { BalanceSheetService } from '../services/balance.service';
import { HttpService } from '@nestjs/axios';
import { successfulResponse } from './xero-response';
import { of } from 'rxjs';

type MockHttpService = HttpService & {
  get: jest.Mock;
};

describe('BalanceSheetService', () => {
  let service: BalanceSheetService;
  let httpService: MockHttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BalanceSheetService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<BalanceSheetService>(BalanceSheetService);
    httpService = module.get<MockHttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch balance sheet data correctly', async () => {
    httpService.get.mockReturnValue(of({ data: successfulResponse }));
    const result = await service.getBalanceSheet();
    expect(result).toEqual(successfulResponse);
    expect(httpService.get).toHaveBeenCalledWith(
      'http://localhost:6001/api.xro/2.0/Reports/BalanceSheet',
    );
  });

  it('should handle errors', async () => {
    const errorMessage = 'Failed to fetch balance sheet data';
    await expect(service.getBalanceSheet()).rejects.toThrow(errorMessage);
  });
});
