import React from 'react';
import { Container, Form } from 'react-bootstrap';

export default function BillingInfo() {
  return (
    <Form className="d-flex flex-column">
      <Form.Group className="d-flex flex-row flex-wrap row-gap-2 mb-3">
        <Form.Label>Recipient</Form.Label>
        <Form.Control className="flex-1" type="text" placeholder="Full Name" />
        <Form.Control className="" type="email" placeholder="Email Address" />
      </Form.Group>

      <Form.Group className="d-flex flex-row flex-wrap gap-2 mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Street Address" />
        <Form.Control type="tel" placeholder="Apt, Suite, Bldg, Gate Code,. (optional)" />
        <Form.Control type="tel" placeholder="City" />
        <Container className="d-flex flex-row justify-content-between column-gap-2 p-0">
          <Form.Select className="flex-shrink-1" placeholder="Country">
            <option disabled>Country</option>
            <option>Few</option>
            <option>Country</option>
          </Form.Select>
          <Form.Control className=" flex-1 w-50" type="tel" placeholder="Zip" />
        </Container>
      </Form.Group>
    </Form>
  );
}
