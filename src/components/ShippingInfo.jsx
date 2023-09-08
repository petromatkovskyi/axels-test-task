import React from 'react';
import { Form } from 'react-bootstrap';

export default function ShippingInfo() {
  return (
    <Form className="d-flex flex-column">
      <Form.Group className="d-flex flex-row flex-wrap row-gap-2 mb-3">
        <Form.Label>Recipient</Form.Label>
        <Form.Control className="flex-1" type="text" placeholder="Full Name" />
        <Form.Control className="w-50" type="tel" placeholder="Daytime Phone" />
        <Form.Text className="w-50 ps-1">For delivery questions only</Form.Text>
      </Form.Group>

      <Form.Group className="d-flex flex-row flex-wrap gap-2 mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Street Address" />
        <Form.Control type="tel" placeholder="Apt, Suite, Bldg, Gate Code,. (optional)" />
        <Form.Control type="tel" placeholder="City" />
        <Form.Select className="w-50" placeholder="Country">
          <option>Some</option>
          <option>Few</option>
          <option>Country</option>
        </Form.Select>
        <Form.Control className="flex-shrink-3 w-25" type="tel" placeholder="Zip" />
      </Form.Group>
    </Form>
  );
}
