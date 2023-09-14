import { useState } from 'react';
import { Breadcrumb, Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import ShippingInfo from '../components/ShippingInfo';
import BillingInfo from '../components/BillingInfo';
import Payment from '../components/Payment';
import OrderedList from './OrderedList';
import SuccessInfo from '../components/SuccessInfo';

const StyledBreadcrumb = styled(Breadcrumb.Item)`
  text-decoration: none;
  &:not(:first-child):before {
    content: '>' !important;
  }
`;

export default function FormContainer() {
  const [stepName, setStepName] = useState('shipping');

  const onNextStep = () => {
    switch (true) {
      case stepName === 'shipping':
        setStepName('billing');
        break;
      case stepName === 'billing':
        setStepName('payment');
        break;

      case stepName === 'payment':
        setStepName('success');
        break;

      default:
        setStepName('shipping');
        break;
    }
  };

  const steps = {
    shipping: <ShippingInfo onNextStep={onNextStep} />,
    billing: <BillingInfo onNextStep={onNextStep} />,
    payment: <Payment onNextStep={onNextStep} />,
    success: <SuccessInfo />,
  };

  return (
    <main className="row mt-5 border border-primary rounded">
      <Container className="col col-7 px-sm-3 px-md-5 py-md-4 border border-black ">
        <Breadcrumb>
          <StyledBreadcrumb href="#" active={stepName !== 'shipping'}>
            Shipping
          </StyledBreadcrumb>
          <StyledBreadcrumb href="#" active={stepName !== 'billing'}>
            Billing
          </StyledBreadcrumb>
          <StyledBreadcrumb href="#" active={stepName !== 'payment'}>
            Payment
          </StyledBreadcrumb>
        </Breadcrumb>
        {steps[stepName]}
        {/* <SuccessInfo /> */}
      </Container>

      <Container
        className="col col-fill px-sm-1 px-md-3 py-md-4 border border-danger-subtle bg-light"
        style={{ filter: 'blur(30)' }}
      >
        <div className="row ">
          <h5 className="col-8 text-primary">Order Summary</h5>
          <p className="col-4 ms-auto text-end">
            <u> edit order</u>
          </p>
        </div>
        <OrderedList />
        <div className="border-bottom mb-3 text-secondary fs-5">
          <Row>
            <Col>
              <p className="mb-1">Subtotal</p>
            </Col>
            <Col>
              <p className="text-end mb-1">&#36;398</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="mb-1">Shipping</p>
            </Col>
            <Col>
              <p className="text-end mb-1">Free</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="mb-1">Taxes</p>
            </Col>
            <Col>
              <p className="text-end mb-1">&#36;12.12</p>
            </Col>
          </Row>
        </div>
        <Row className="text-primary fs-5 fw-bold">
          <Col>
            <p className="mb-1">Total</p>
          </Col>
          <Col>
            <p className="text-end mb-1">&#36;410.12</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
