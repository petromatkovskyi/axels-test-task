import { Col, Form, Row, Button } from 'react-bootstrap';
import StyledFormControl from './StyledFormControl';
import StyledFormFeedback from './StyledFormFeedback';
import { useState } from 'react';
import Feedback from './Feedback';
import StyledFormSelect from './StyledFormSelect';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  daytimePhone: Yup.number()
    .typeError('Daytime phone has to be a number')
    .required('Daytime phone is required'),
  streetAddress: Yup.string().required('Street address is required'),
  additionAddressInfo: Yup.string(),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required'),
  zip: Yup.number().typeError('ZIP has to be a number').required('ZIP is required'),
});

const initialValues = {
  fullName: 'Петро Матковський',
  daytimePhone: 907079,
  streetAddress: 'qweqe',
  additionAddressInfo: 'ljkgjgf',
  city: 'zxc',
  country: 'sdgfh',
  zip: '453454',
};

export default function ShippingInfo({ onNextStep }) {
  const [show, setShow] = useState(true);
  const [target, setTarget] = useState(null);

  const handleClick = (event) => {
    // setShow(!show);
    setTarget(event.target);
  };

  const handleSubmit = (values) => {
    localStorage.setItem('buyForm', JSON.stringify({ shipping: values }));
    onNextStep();
  };

  return (
    <>
      <h3 className="text-primary">Shipping Info</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Form className="row mb-3 gap-3" onSubmit={handleSubmit}>
            <Form.Group className="position-relative p-0">
              <Form.Label>Recipient</Form.Label>

              <StyledFormControl
                type="text"
                name="fullName"
                placeholder="Full Name"
                isInvalid={!!errors.fullName}
                onClick={handleClick}
                onChange={handleChange}
                value={values.fullName}
              />
              {
                //? try implement this type of feedback
              }
              {/* <Feedback
                title="Please enter recipient full name"
                show={show}
                target={target}
              /> */}

              <StyledFormFeedback type="invalid" tooltip>
                {errors.fullName}
              </StyledFormFeedback>
            </Form.Group>

            <Form.Group as={Col} sm={12} md={7} className="position-relative p-0">
              <StyledFormControl
                type="tel"
                placeholder="Daytime Phone"
                isInvalid={!!errors.daytimePhone}
                name="daytimePhone"
                onChange={handleChange}
                value={values.daytimePhone}
              />
              <StyledFormFeedback type="invalid" tooltip>
                {errors.daytimePhone}
              </StyledFormFeedback>
              {/* <Feedback
              title="Please enter recipient full name"
              show={show}
              target={target}
              ref={FullNameInput}
            /> */}
            </Form.Group>
            <Col sm={12} md={4}>
              <Form.Text className="ps-2">For delivery questions only</Form.Text>
            </Col>
            <Form.Group as={Row} className="gx-0 gy-2">
              <Form.Label>Address</Form.Label>

              <StyledFormControl
                type="text"
                placeholder="Street Address"
                isInvalid={!!errors.streetAddress}
                name="streetAddress"
                onChange={handleChange}
                value={values.streetAddress}
              />
              <StyledFormFeedback type="invalid" tooltip>
                {errors.streetAddress}
              </StyledFormFeedback>

              <StyledFormControl
                type="text"
                placeholder="Apt, Suite, Bldg, Gate Code,. (optional)"
                name="additionAddressInfo"
                onChange={handleChange}
                value={values.additionAddressInfo}
              />
              <div>
                <StyledFormControl
                  type="text"
                  name="city"
                  placeholder="City"
                  isInvalid={!!errors.city}
                  onChange={handleChange}
                  value={values.city}
                />
                <StyledFormFeedback type="invalid" tooltip>
                  {errors.city}
                </StyledFormFeedback>
              </div>

              <Row className="column-gap-3 gx-0 gy-2">
                <Col sm={12} md={7}>
                  <StyledFormSelect
                    name="country"
                    placeholder="Country"
                    isInvalid={!!errors.country}
                    value={values.country}
                    onChange={handleChange}
                  >
                    <option>Some</option>
                    <option>Few</option>
                    <option>Country</option>
                  </StyledFormSelect>
                  <StyledFormFeedback type="invalid" tooltip>
                    {errors.country}
                  </StyledFormFeedback>
                </Col>

                <Col sm={12} md={4}>
                  <StyledFormControl
                    type="tel"
                    placeholder="ZIP"
                    isInvalid={!!errors.zip}
                    name="zip"
                    onChange={handleChange}
                    value={values.zip}
                  />
                  <StyledFormFeedback type="invalid" tooltip>
                    {errors.zip}
                  </StyledFormFeedback>
                </Col>
              </Row>
            </Form.Group>
            <Button className="col-7" type="submit">
              Continue
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
