import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';

describe('CurrencyController', () => {
  let controller: CurrencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrencyController],
      providers: [
        {
          provide: CurrencyService,
          useValue: {
            getDollarEquivalent: jest.fn().mockResolvedValue(4),
          },
        },
      ],
    }).compile();

    controller = module.get<CurrencyController>(CurrencyController);
  });

  it('should return equivalent for valid amount', async () => {
    const result = await controller.getDollarEquivalent(2000);
    expect(result).toEqual({ colones: 2000, dollars: 4 });
  });
});
