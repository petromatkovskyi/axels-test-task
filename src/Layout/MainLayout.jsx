import React from 'react';

import { Breadcrumb, Container } from 'react-bootstrap';
import Header from '../containers/Header';
import FormContainer from '../containers/FormContainer';

export default function MainLayout() {
  return (
    <Container>
      <Header />
      <FormContainer />
    </Container>
  );
}
