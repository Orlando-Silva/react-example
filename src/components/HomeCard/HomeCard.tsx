import React from 'react';
import { Card, Col, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeCardProps } from './HomeCardProps';

const HomeCard: React.FunctionComponent<HomeCardProps> = ({
  text,
}) => (
  <Row>
    <Card style={{ width: '18rem' }}>
      <Card.Title data-testid="card-title">
        Title
      </Card.Title>
      <Card.Text data-testid="card-text">
        { text }
      </Card.Text>
    </Card>
  </Row>
);

export default HomeCard;
