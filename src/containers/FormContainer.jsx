import React from 'react';
import { Breadcrumb, Button, Container, Form } from 'react-bootstrap';
import styled from 'styled-components';
import ShippingInfo from '../components/ShippingInfo';
import BillingInfo from '../components/BillingInfo';

const StyledBreadcrumb = styled(Breadcrumb.Item)`
  &:not(:first-child):before {
    content: '>' !important;
  }
`;

export default function FormContainer() {
  return (
    <Container as="main" className="d-flex flex-row m-4">
      <Container>
        <Breadcrumb>
          <StyledBreadcrumb href="#">Shipping</StyledBreadcrumb>
          <StyledBreadcrumb href="#">Billing</StyledBreadcrumb>
          <StyledBreadcrumb href="#">Payment</StyledBreadcrumb>
        </Breadcrumb>

        <h3>Shipping Info</h3>
        {/* <ShippingInfo /> */}
        <BillingInfo />
        <Button>Continue</Button>
      </Container>

      <Container>Order Summary</Container>
    </Container>
  );
}
