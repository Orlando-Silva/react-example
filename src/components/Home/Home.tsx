import React, { useState } from 'react';
import {
  Card, Col, Container, Form,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeInput } from '../HomeInput';
import { HomeCard } from '../HomeCard';

const Home: React.FunctionComponent = () => {
  const [cardValue, setCardValue] = useState('');

  return (
    <Container data-testid="container" className="justify-content-md-center">
      <HomeInput value={cardValue} valueSetter={setCardValue} />
      <HomeCard text={cardValue} />
    </Container>
  );
};

export default Home;
