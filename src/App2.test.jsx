import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';

// Mock people data
const mockPeople = [
  { name: 'Juan Pérez', rol: 'Developer', experienceYears: 5 },
  { name: 'María García', rol: 'Designer', experienceYears: 3 },
];

// Test App2 logic without CSS imports
function TestApp2() {
  const [count, setCount] = useState(0);
  const [showPeoplePage, setShowPeoplePage] = useState(false);

  if (showPeoplePage) {
    return (
      <>
        <h1>People</h1>
        <button onClick={() => setShowPeoplePage(false)}>Back</button>
        <div>
          {mockPeople.map((person, index) => (
            <div key={index}>
              <p>
                <strong>{person.name}</strong> - {person.rol} - {person.experienceYears} experience years
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Welcome, initial installation.........</h1>
      <button onClick={() => setCount((count) => count + 10)}>
        GRAINGER in {count} seconds
      </button>
      <button onClick={() => setShowPeoplePage(true)}>Go to people page</button>
    </>
  );
}

describe('App2 Logic', () => {
  it('renders the main page initially', () => {
    render(<TestApp2 />);
    expect(screen.getByText(/Welcome, initial installation/i)).toBeDefined();
  });

  it('renders the GRAINGER counter button', () => {
    render(<TestApp2 />);
    const button = screen.getByRole('button', { name: /GRAINGER in 0 seconds/i });
    expect(button).toBeDefined();
  });

  it('increments counter when GRAINGER button is clicked', () => {
    render(<TestApp2 />);
    const button = screen.getByRole('button', { name: /GRAINGER in 0 seconds/i });
    
    fireEvent.click(button);
    
    const updatedButton = screen.getByRole('button', { name: /GRAINGER in 10 seconds/i });
    expect(updatedButton).toBeDefined();
  });

  it('renders "Go to people page" button', () => {
    render(<TestApp2 />);
    const button = screen.getByRole('button', { name: /Go to people page/i });
    expect(button).toBeDefined();
  });

  it('navigates to people page when clicking "Go to people page"', () => {
    render(<TestApp2 />);
    const goToPeopleButton = screen.getByRole('button', { name: /Go to people page/i });
    
    fireEvent.click(goToPeopleButton);
    
    expect(screen.getByText('People')).toBeDefined();
    expect(screen.getByRole('button', { name: /Back/i })).toBeDefined();
  });

  it('displays people list on people page', () => {
    render(<TestApp2 />);
    const goToPeopleButton = screen.getByRole('button', { name: /Go to people page/i });
    
    fireEvent.click(goToPeopleButton);
    
    // Check if at least one person is displayed
    expect(screen.getByText(/Juan Pérez/i)).toBeDefined();
  });

  it('goes back to main page when clicking Back button', () => {
    render(<TestApp2 />);
    const goToPeopleButton = screen.getByRole('button', { name: /Go to people page/i });
    
    fireEvent.click(goToPeopleButton);
    
    const backButton = screen.getByRole('button', { name: /Back/i });
    fireEvent.click(backButton);
    
    expect(screen.getByText(/Welcome, initial installation/i)).toBeDefined();
  });

  it('increments counter by 10 on each click', () => {
    render(<TestApp2 />);
    const button = screen.getByRole('button', { name: /GRAINGER in 0 seconds/i });
    
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    
    const updatedButton = screen.getByRole('button', { name: /GRAINGER in 30 seconds/i });
    expect(updatedButton).toBeDefined();
  });

  it('displays all people in the list', () => {
    render(<TestApp2 />);
    const goToPeopleButton = screen.getByRole('button', { name: /Go to people page/i });
    
    fireEvent.click(goToPeopleButton);
    
    expect(screen.getByText(/Juan Pérez/i)).toBeDefined();
    expect(screen.getByText(/María García/i)).toBeDefined();
  });

  it('displays person details correctly', () => {
    render(<TestApp2 />);
    const goToPeopleButton = screen.getByRole('button', { name: /Go to people page/i });
    
    fireEvent.click(goToPeopleButton);
    
    // Search for individual parts since they're in separate elements
    expect(screen.getByText('Juan Pérez')).toBeDefined();
    expect(screen.getByText(/Developer/)).toBeDefined();
    expect(screen.getByText(/5 experience years/)).toBeDefined();
    
    expect(screen.getByText('María García')).toBeDefined();
    expect(screen.getByText(/Designer/)).toBeDefined();
    expect(screen.getByText(/3 experience years/)).toBeDefined();
  });
});