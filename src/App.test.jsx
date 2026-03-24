import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import { decrementCount } from './utils';

// Simple counter component without CSS imports for testing
function TestCounter() {
  const [count, setCount] = useState(10);

  const handleDecrement = () => {
    decrementCount(count, setCount);
  };

  return (
    <>
      <button onClick={handleDecrement}>
        {count === 0 ? 'Ready!!' : `Count is ${count}`}
      </button>
      <h2>Hello from parent</h2>
    </>
  );
}

describe('Counter Logic', () => {
  it('renders the counter button with initial count', () => {
    render(<TestCounter />);
    const button = screen.getByRole('button', { name: /Count is 10/i });
    expect(button).toBeDefined();
  });

  it('decrements counter when button is clicked', () => {
    render(<TestCounter />);
    const button = screen.getByRole('button', { name: /Count is 10/i });
    
    fireEvent.click(button);
    
    const updatedButton = screen.getByRole('button', { name: /Count is 9/i });
    expect(updatedButton).toBeDefined();
  });

  it('shows "Ready!!" when count reaches 0', () => {
    render(<TestCounter />);
    const button = screen.getByRole('button', { name: /Count is 10/i });
    
    // Click 10 times to reach 0
    for (let i = 0; i < 10; i++) {
      fireEvent.click(button);
    }
    
    const readyButton = screen.getByRole('button', { name: /Ready!!/i });
    expect(readyButton).toBeDefined();
  });

  it('does not decrement below 0', () => {
    render(<TestCounter />);
    const button = screen.getByRole('button', { name: /Count is 10/i });
    
    // Click 11 times (should stop at 0)
    for (let i = 0; i < 11; i++) {
      fireEvent.click(button);
    }
    
    const readyButton = screen.getByRole('button', { name: /Ready!!/i });
    expect(readyButton).toBeDefined();
  });
});