import React from 'react';
import { render } from '@testing-library/react';
import { HomeCard } from './index';

describe('Home Card Component tests', () => {
  test('renders home card title', () => {
    const expectedTitle = 'Card Number';

    const { getByTestId } = render(<HomeCard text="blablabla" />);
    const cardTitle = getByTestId('card-title');

    expect(cardTitle).toHaveTextContent(expectedTitle);
  });

  test('renders home card text content', () => {
    const expectedTextContent = 'This is a text content test';

    const { getByTestId } = render(<HomeCard text={expectedTextContent} />);
    const cardText = getByTestId('card-text');

    expect(cardText).toHaveTextContent(expectedTextContent);
  });
});
