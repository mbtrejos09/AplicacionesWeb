import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class PositiveNumberPipe implements PipeTransform {
  transform(value: any) {
    const number = Number(value);
    if (isNaN(number) || number <= 0) {
      throw new BadRequestException('Amount must be a positive number');
    }
    return number;
  }
}
