import { Button, Form } from 'react-bootstrap';

export default function Payment({ onNextStep }) {
  return (
    <>
      <h3 className="text-primary">Payment</h3>
      <Form className="row g-3 mb-3">
        <p>This is a secure 128-bit SSL encrypted payment</p>
        <Form.Group>
          <Form.Label>Cardholder Name</Form.Label>
          <Form.Control type="text" placeholder="Name as it appears on your card" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="text" placeholder="XXXX XXXX XXXX XXXX" />
        </Form.Group>
        <Form.Group className="col-4">
          <Form.Label>Expire Date</Form.Label>
          <Form.Control type="text" placeholder="MM / YY" />
        </Form.Group>
        <Form.Group className="col-4">
          <Form.Label>Security Code</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button className="col-7" onClick={onNextStep}>
          Pay Securely
        </Button>
      </Form>
    </>
  );
}
