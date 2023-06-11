import { screen, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import TodoItems from './TodoItems';

const mockData = [
  {
    text: 'Running',
    id: 0,
    active: true,
  },
  {
    text: 'Breakfast',
    id: 1,
    active: true,
  },
];

describe('TodoItems', () => {
  it('running', () => {
    render(<TodoItems todoItems={mockData} setActive={() => null}/>);
    const name = screen.getByText(/running/i);
    expect(name).toBeInTheDocument();
  });
});
