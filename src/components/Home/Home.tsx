import React, { useState } from 'react';
import {
  Col, Container, Row, Stack,
} from 'react-bootstrap';
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
    <Container data-testid="container">
      <HomeInput value={curentCardValue} valueSetter={setCurentCardValue} onNewCard={onNewCard} />
      <Row>
        { cards.map((card, index) => (
          <Col lg={2} className="mt-4" data-testid={`card-id-${index}`} key={_.uniqueId('card-id-')}>
            { card }
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
