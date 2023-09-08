import React from 'react';
import { Col, Container, Figure, NavbarBrand } from 'react-bootstrap';

export default function Header() {
  return (
    <Container
      as="header"
      fluid
      className="d-flex flex-row"
      style={{ borderBottom: '1px solid gray' }}
    >
      <Col>
        <NavbarBrand href="#home">Front-end Developer Test Task</NavbarBrand>
      </Col>
      <Col>
        <Figure className="d-flex flex-row justify-content-end align-items-center gap-1">
          <Figure.Caption>cart</Figure.Caption>
          <i className="bi bi-cart3"></i>
        </Figure>
      </Col>
    </Container>
  );
}
