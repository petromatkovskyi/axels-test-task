import React from 'react';
import { Form } from 'react-bootstrap';

export default function FormControlWithFeedback(type, placeholder, isInvalid, IsValid) {
  return (
    <div>
      <Form.Control></Form.Control>
      <Form.Feedback></Form.Feedback>
    </div>
  );
}
