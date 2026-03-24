import { describe, it, expect, vi } from 'vitest';
import { decrementCount } from './utils';

describe('utils - decrementCount', () => {
  it('decrements count when count is greater than 0', () => {
    const setCount = vi.fn();
    decrementCount(5, setCount);
    
    expect(setCount).toHaveBeenCalledWith(4);
  });

  it('does not decrement when count is 0', () => {
    const setCount = vi.fn();
    decrementCount(0, setCount);
    
    expect(setCount).not.toHaveBeenCalled();
  });

  it('does not decrement when count is negative', () => {
    const setCount = vi.fn();
    decrementCount(-1, setCount);
    
    expect(setCount).not.toHaveBeenCalled();
  });

  it('decrements from 1 to 0', () => {
    const setCount = vi.fn();
    decrementCount(1, setCount);
    
    expect(setCount).toHaveBeenCalledWith(0);
  });
});