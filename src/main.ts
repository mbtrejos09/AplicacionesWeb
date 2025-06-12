import { NestFactory } from '@nestjs/core';
import { CurrencyModule } from './currency/currency.module';

async function bootstrap() {
  const app = await NestFactory.create(CurrencyModule);
  await app.listen(3000);
}
bootstrap();
