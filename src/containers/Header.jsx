import React from 'react';

import { Badge, Col, Container, Figure } from 'react-bootstrap';

import Cart from '../assets/images/cart.svg';

export default function Header() {
  return (
    <Container as="header" className="row border-bottom border-secondary" fluid>
      <Col>
        <h4 href="#home" className="text-primary text-center">
          Front-end Developer Test Task
        </h4>
      </Col>
      <Col>
        <Figure className="d-flex flex-row justify-content-end align-items-center gap-1 position-relative m-3">
          <Figure.Caption className="text-primary">cart</Figure.Caption>
          <Figure.Image width={25} src={Cart} />
          <Badge
            bg="secondary"
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            9
          </Badge>
        </Figure>
      </Col>
    </Container>
  );
}
