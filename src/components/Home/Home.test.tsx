import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Home from './Home';

describe('Home Component tests', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<Home />);
    const container = getByTestId('container');

    expect(container).toBeDefined();
  });

  test('when onNewCard event is triggered, a new card is added', () => {
    const { getByTestId } = render(<Home />);
    const input = getByTestId('input');
    const button = getByTestId('button');

    fireEvent.change(input, { target: { value: 'batata' } });
    fireEvent.click(button);

    const card = getByTestId('card-id-0');

    expect(card).toBeDefined();
  });
});
