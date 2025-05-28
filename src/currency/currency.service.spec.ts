import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    service = new CurrencyService();
    jest.spyOn(service, 'getDollarValue').mockResolvedValue(500);
  });

  it('should return correct dollar equivalent', async () => {
    const result = await service.getDollarEquivalent(2500);
    expect(result).toBe(5); // 2500 / 500
  });
});
