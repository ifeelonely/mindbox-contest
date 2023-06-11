import { screen, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Todo from './Todo';

describe('TodoSort', () => {
  it('todo', () => {
    render(<Todo />);
    const name = screen.getByRole('heading', {
      level: 1
    });
    expect(name).toHaveTextContent('todos');
  });
});
