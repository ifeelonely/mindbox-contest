import { screen, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import TodoSort from './TodoSort';

describe('TodoSort', () => {
  it('overall', () => {
    render(
      <TodoSort
        items={4}
        getSortOpt={() => null}
        currentOpt="all"
        clearCompleted={() => null}
      />
    );
    const name = screen.getByText(/overall/i);
    expect(name).toBeInTheDocument();
  });
});
