import { screen, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Todo from './Todo';

describe('TodoSort', () => {
  it('todo', () => {
    render(<Todo />);
    expect(screen.getByText('todos')).toBeInTheDocument();
  });
});
