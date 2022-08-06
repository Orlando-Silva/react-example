import React from 'react';
import { Col, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeInputProps } from './HomeInputProps';

const HomeInput: React.FunctionComponent<HomeInputProps> = ({
  value,
  valueSetter,
}) => (
  <Row>
    <Col md={{ span: 3, offset: 3 }}>
      <Form.Label htmlFor="card-text" data-testid="input-label">Card Text</Form.Label>
      <Form.Control
        data-testid="input"
        type="text"
        id="card-text"
        value={value}
        onChange={(e) => valueSetter(e.target.value)}
      />
      <Form.Text id="passwordHelpBlock" data-testid="input-helper">
        Type what&apos;s in the card
      </Form.Text>
    </Col>
  </Row>
);

export default HomeInput;
