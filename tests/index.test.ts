import { describe, it, expect } from 'vitest';
import { greet } from '../src';

describe('greet', () => {
  it('should return greeting message with the provided name', () => {
    expect(greet('John')).toBe('Hello, John from ts-lombok!');
  });

  it('should work with empty string', () => {
    expect(greet('')).toBe('Hello,  from ts-lombok!');
  });
}); 