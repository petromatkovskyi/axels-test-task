import React from 'react';
import { Form } from 'react-bootstrap';

export default function Payment() {
  return (
    <Form className="mb-3">
      <p>This is a secure 128-bit SSL encrypted payment</p>
      <Form.Group>
        <Form.Label>Cardholder Name</Form.Label>
        <Form.Control type="text" placeholder="Name as it appears on your card" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Card Number</Form.Label>
        <Form.Control type="text" placeholder="XXXX XXXX XXXX XXXX" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Expire Date</Form.Label>
        <Form.Control type="text" placeholder="MM / YY" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Security Code</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
    </Form>
  );
}
