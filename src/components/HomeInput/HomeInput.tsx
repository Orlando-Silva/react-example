import React from 'react';
import {
  Button, Col, Form, Stack,
} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeInputProps } from './HomeInputProps';

const HomeInput: React.FunctionComponent<HomeInputProps> = ({
  value,
  valueSetter,
  onNewCard,
}) => (
  <Stack direction="horizontal" gap={3}>
    <div>
      <Form.Label htmlFor="card-text" data-testid="input-label">Card Text</Form.Label>
      <Form.Control
        data-testid="input"
        type="textarea"
        as="textarea"
        id="card-text"
        className="ms-auto"
        value={value}
        onChange={(e) => valueSetter(e.target.value)}
      />
      <Form.Text id="passwordHelpBlock" data-testid="input-helper">
        Type what&apos;s in the card
      </Form.Text>
    </div>
    <div>
      <Button data-testid="button" className="mt-1" onClick={() => onNewCard()} variant="primary">Add new card</Button>
    </div>
  </Stack>
);

export default HomeInput;
