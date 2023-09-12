import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

export default function BillingInfo({ onNextStep }) {
  return (
    <>
      <h3 className="text-primary">Billing Information</h3>
      <Form className="row gap-2 p-3">
        <Form.Label className="p-0 m-0">Billing Contact</Form.Label>
        <Form.Control type="text" placeholder="Full Name" />
        <Form.Control type="email" placeholder="Email Address" />

        <Form.Label className="p-0 m-0">Billing Address</Form.Label>
        <Form.Control type="text" placeholder="Street Address" />
        <Form.Control type="tel" placeholder="Apt, Suite, Bldg, Gate Code,. (optional)" />
        <Form.Control type="tel" placeholder="City" />
        <Col sm={12} md={7} className="p-0">
          <Form.Select placeholder="Country">
            <option disabled>Country</option>
            <option>Few</option>
            <option>Country</option>
          </Form.Select>
        </Col>
        <Col sm={12} md={4} className="p-0 ms-auto">
          <Form.Control type="tel" placeholder="Zip" />
        </Col>
        <Button className="col-7" onClick={onNextStep}>
          Continue
        </Button>
      </Form>
    </>
  );
}
