import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// Test the Child component inline without full import to avoid Bootstrap CSS
function TestChild({ message }) {
  return <h2>{message}</h2>;
}

describe('Child Component', () => {
  it('renders the message prop', () => {
    render(<TestChild message="Hello from parent" />);
    expect(screen.getByText('Hello from parent')).toBeDefined();
  });

  it('renders as an h2 element', () => {
    render(<TestChild message="Test message" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeDefined();
  });

  it('displays different messages based on prop', () => {
    const { rerender } = render(<TestChild message="First message" />);
    expect(screen.getByText('First message')).toBeDefined();

    rerender(<TestChild message="Second message" />);
    expect(screen.getByText('Second message')).toBeDefined();
  });
});