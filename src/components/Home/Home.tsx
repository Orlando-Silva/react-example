import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
import { HomeInput } from '../HomeInput';
import { HomeCard } from '../HomeCard';

const Home: React.FunctionComponent = () => {
  const [curentCardValue, setCurentCardValue] = useState('');
  const [cards, setCards] = useState<JSX.Element[]>([]);

  const onNewCard = (): void => {
    setCards([...cards, <HomeCard text={curentCardValue} />]);
  };

  return (
    <Container data-testid="container" className="justify-content-md-center">
      <HomeInput value={curentCardValue} valueSetter={setCurentCardValue} onNewCard={onNewCard} />
      { cards.map((card, index) => (
        <div data-testid={`card-id-${index}`} key={_.uniqueId('card-id-')}>
          { card }
        </div>
      ))}
    </Container>
  );
};

export default Home;
