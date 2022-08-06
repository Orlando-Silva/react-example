import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Home from './Home';

describe('Home Component tests', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<Home />);
    const container = getByTestId('container');

    expect(container).toBeDefined();
  });

  test('change input and update card text', () => {
    const { getByTestId } = render(<Home />);
    const input = getByTestId('input');
    const cardText = getByTestId('card-text');
    fireEvent.change(input, { target: { value: 'batata' } });

    expect(cardText).toHaveTextContent('batata');
  });
});
