import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeInputProps } from './HomeInputProps';

const HomeInput: React.FunctionComponent<HomeInputProps> = ({
  value,
  valueSetter,
  onNewCard,
}) => (
  <Row>
    <Col md={{ span: 3, offset: 3 }}>
      <Form.Label htmlFor="card-text" data-testid="input-label">Card Text</Form.Label>
      <div className="input-row">
        <Form.Control
          data-testid="input"
          type="text"
          id="card-text"
          className="col-md-3"
          value={value}
          onChange={(e) => valueSetter(e.target.value)}
        />
        <Button data-testid="button" className="col-md-7" onClick={() => onNewCard()} variant="primary">Add new card</Button>
      </div>
      <Form.Text id="passwordHelpBlock" data-testid="input-helper">
        Type what&apos;s in the card
      </Form.Text>
    </Col>
  </Row>
);

export default HomeInput;
