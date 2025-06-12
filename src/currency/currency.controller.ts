import { Controller, Get, Param } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { PositiveNumberPipe } from './pipes/positive-number.pipe';

@Controller('dollarEquivalent')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get(':amount')
  async getDollarEquivalent(@Param('amount', PositiveNumberPipe) amount: number) {
    const result = await this.currencyService.getDollarEquivalent(amount);
    return { colones: amount, dollars: result };
  }
}
