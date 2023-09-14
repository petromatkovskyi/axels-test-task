import React from 'react';
import some from '../assets/images/atm-card.png';
import { Col, Container, Figure, Row } from 'react-bootstrap';

export default function OrderedItemCard() {
  return (
    <Container className="border-bottom mb-2 pb-2">
      <Row>
        <Col sm={2}>
          <Figure>
            <Figure.Image width={60} alt="icon" src={some} />
          </Figure>
        </Col>
        <Col sm={8}>
          <p className="mb-1 text-secondary fs-5">The Chelsea Boot</p>
          <p className="mb-0 ">Black</p>
          <p className="mb-1">Quantity: 1</p>
        </Col>
        <Col sm={2}>
          <p className="text-end text-secondary">&#36;235</p>
        </Col>
      </Row>
    </Container>
  );
}
