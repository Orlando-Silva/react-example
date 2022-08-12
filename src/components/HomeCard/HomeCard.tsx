import React from 'react';
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeCardProps } from './HomeCardProps';

const HomeCard: React.FunctionComponent<HomeCardProps> = ({
  text,
}) => (
  <Card>
    <Card.Header data-testid="card-title">Card Number</Card.Header>
    <Card.Body>
      <Card.Text data-testid="card-text">
        { text }
      </Card.Text>
    </Card.Body>
  </Card>
);

export default HomeCard;
