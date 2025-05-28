import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CurrencyService {
  private dollarValue: number | null = null;
  private readonly logger = new Logger(CurrencyService.name);

  async getDollarValue(): Promise<number> {
    if (this.dollarValue !== null) return this.dollarValue;

    try {
      const response = await axios.get<{
        dolar: {
          venta: {
            valor: number;
          };
        };
      }>('https://api.hacienda.go.cr/indicadores/tc');

      this.dollarValue = response.data.dolar.venta.valor;
      return this.dollarValue;
    } catch (error) {
      this.logger.error('Error fetching dollar value:', error.message);
      throw new Error('Unable to fetch dollar value');
    }
  }

  async getDollarEquivalent(colones: number): Promise<number> {
    const rate = await this.getDollarValue();
    return colones / rate;
  }
}
