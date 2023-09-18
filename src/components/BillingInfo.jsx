import { Formik } from 'formik';
import { Button, Col, Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import StyledFormFeedback from './StyledFormFeedback';
import StyledFormControl from './StyledFormControl';
import StyledFormSelect from './StyledFormSelect';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string()
    .email('Please enter valid email address')
    .required('Email phone is required'),
  streetAddress: Yup.string().required('Street address is required'),
  additionBillingAddressInfo: Yup.string(),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required'),
  zip: Yup.number().typeError('ZIP has to be a number').required('ZIP is required'),
});

const initialValues = {
  fullName: '',
  email: '',
  streetAddress: '',
  additionBillingAddressInfo: '',
  city: '',
  country: '',
  zip: '',
};

export default function BillingInfo({ onNextStep }) {
  const handleSubmit = () => {};
  return (
    <>
      <h3 className="text-primary">Billing Information</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Form className="row mb-3 gap-3" onSubmit={handleSubmit}>
            <Form.Group className="row gap-2 p-0 gx-0">
              <Form.Label className="p-0 m-0">Billing Contact</Form.Label>

              <Row className="column-gap-3 gx-0 gy-2">
                <StyledFormControl
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  value={values.fullName}
                  isInvalid={!!errors.fullName}
                />
                <StyledFormFeedback type="invalid" tooltip>
                  {errors.fullName}
                </StyledFormFeedback>
              </Row>

              <Row className="column-gap-3 gx-0 gy-2">
                <StyledFormControl
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  isInvalid={!!errors.email}
                />
                <StyledFormFeedback type="invalid" tooltip>
                  {errors.email}
                </StyledFormFeedback>
              </Row>
            </Form.Group>

            <Form.Label className="p-0 m-0">Billing Address</Form.Label>
            <Row className="column-gap-3 gx-0 gy-2">
              <StyledFormControl
                type="text"
                placeholder="Street Address"
                name="email"
                onChange={handleChange}
                value={values.email}
                isInvalid={!!errors.email}
              />
              <StyledFormFeedback type="invalid" tooltip>
                {errors.email}
              </StyledFormFeedback>
            </Row>

            <StyledFormControl
              placeholder="Apt, Suite, Bldg, Gate Code,. (optional)"
              name="additionBillingAddressInfo"
              onChange={handleChange}
              value={values.additionBillingAddressInfo}
            />
            <Row className="column-gap-3 gx-0 gy-2">
              <StyledFormControl
                placeholder="City"
                name="city"
                onChange={handleChange}
                value={values.city}
                isInvalid={!!errors.city}
              />
              <StyledFormFeedback type="invalid" tooltip>
                {errors.city}
              </StyledFormFeedback>
            </Row>
            <Col sm={12} md={7} className="p-0">
              <StyledFormSelect
                placeholder="Country"
                name="country"
                onChange={handleChange}
                value={values.country}
                isInvalid={!!errors.country}
              >
                <option disabled>Country</option>
                <option>Few</option>
                <option>Country</option>
              </StyledFormSelect>
              <StyledFormFeedback type="invalid" tooltip>
                {errors.country}
              </StyledFormFeedback>
            </Col>
            <Col sm={12} md={4} className="p-0 ms-auto">
              <StyledFormControl
                type="tel"
                placeholder="Zip"
                name="zip"
                onChange={handleChange}
                value={values.zip}
                isInvalid={!!errors.zip}
              />
              <StyledFormFeedback type="invalid" tooltip>
                {errors.zip}
              </StyledFormFeedback>
            </Col>
            <Button className="col-7" type="submit">
              Continue
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
