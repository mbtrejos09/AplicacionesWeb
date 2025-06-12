import { PositiveNumberPipe } from './positive-number.pipe';
import { BadRequestException } from '@nestjs/common';

describe('PositiveNumberPipe', () => {
  const pipe = new PositiveNumberPipe();

  it('should accept valid positive number', () => {
    expect(pipe.transform('100')).toBe(100);
  });

  it('should throw error for non-numeric input', () => {
    expect(() => pipe.transform('abc')).toThrow(BadRequestException);
  });

  it('should throw error for negative number', () => {
    expect(() => pipe.transform('-5')).toThrow(BadRequestException);
  });
});
