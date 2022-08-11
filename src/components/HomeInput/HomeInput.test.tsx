import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { HomeInput } from './index';

describe('Home Input Component tests', () => {
  test('renders label for control', () => {
    const expectedLabel = 'Card Text';
    const setter = jest.fn();
    const onNewCard = jest.fn();

    const { getByTestId } = render(<HomeInput value="" valueSetter={setter} onNewCard={onNewCard} />);
    const label = getByTestId('input-label');

    expect(label).toHaveTextContent(expectedLabel);
  });

  test('renders helper for control', () => {
    const expectedHelper = 'Type what\'s in the card';
    const setter = jest.fn();
    const onNewCard = jest.fn();

    const { getByTestId } = render(<HomeInput value="" valueSetter={setter} onNewCard={onNewCard} />);
    const helper = getByTestId('input-helper');

    expect(helper).toHaveTextContent(expectedHelper);
  });

  test('renders label with reference for control', () => {
    const setter = jest.fn();
    const onNewCard = jest.fn();

    const { getByTestId } = render(<HomeInput value="" valueSetter={setter} onNewCard={onNewCard} />);
    const label = getByTestId('input-label');

    expect(label).toHaveAttribute('for', 'card-text');
  });

  test('input fires onChange event', () => {
    const valueSetter = jest.fn();
    const onNewCard = jest.fn();

    const { getByTestId } = render(<HomeInput value="" valueSetter={valueSetter} onNewCard={onNewCard} />);
    const input = getByTestId('input');

    fireEvent.change(input, { target: { value: 'batata' } });

    expect(valueSetter).toBeCalled();
  });

  test('render a button', () => {
    const valueSetter = jest.fn();
    const onNewCard = jest.fn();

    const { getByTestId } = render(<HomeInput value="" valueSetter={valueSetter} onNewCard={onNewCard} />);
    const button = getByTestId('button');

    expect(button).toBeDefined();
  });

  test('when a button click event occurs, it should trigger onNewCard', () => {
    const valueSetter = jest.fn();
    const onNewCard = jest.fn();

    const { getByTestId } = render(<HomeInput value="" valueSetter={valueSetter} onNewCard={onNewCard} />);
    const button = getByTestId('button');

    fireEvent.click(button);

    expect(onNewCard).toBeCalled();
  });
});
