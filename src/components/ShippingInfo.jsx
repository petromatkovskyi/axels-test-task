import { Col, Form, Row, Button, Tooltip } from 'react-bootstrap';
import StyledFormControl from './StyledFormControl';
import StyledFormFeedback from './StyledFormFeedback';
import TriggerExample from './TooltipExample';
import { useRef, useState } from 'react';
import Feedback from './Feedback';

export default function ShippingInfo({ onNextStep }) {
  const [show, setShow] = useState(true);
  const [target, setTarget] = useState(null);
  const FullNameInput = useRef(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    // setShow(!show);
    setTarget(event.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3 className="text-primary">Shipping Info</h3>
      <Form className="row mb-3 gap-3" onSubmit={handleSubmit}>
        <Form.Group className="position-relative p-0">
          <Form.Label>Recipient</Form.Label>

          <div ref={FullNameInput}>
            <StyledFormControl
              type="text"
              placeholder="Full Name"
              isInvalid={true}
              onClick={handleClick}
            />
            <Feedback
              title="Please enter recipient full name"
              show={show}
              target={target}
              ref={FullNameInput}
            />
            {/* <StyledFormFeedback type="invalid" tooltip>
              Please enter recipient full name
            </StyledFormFeedback> */}
          </div>
        </Form.Group>
        <Form.Group as={Col} sm={12} md={7} className="position-relative p-0">
          <StyledFormControl type="tel" placeholder="Daytime Phone" isInvalid={true} />
          <StyledFormFeedback type="invalid" tooltip>
            Please enter daytime phone
          </StyledFormFeedback>
        </Form.Group>
        <Col sm={12} md={4}>
          <Form.Text className="ps-2">For delivery questions only</Form.Text>
        </Col>
        <Form.Group as={Row} className="gx-0 gy-2">
          <Form.Label>Address</Form.Label>
          <StyledFormControl type="text" placeholder="Street Address" />
          <StyledFormControl
            type="tel"
            placeholder="Apt, Suite, Bldg, Gate Code,. (optional)"
          />
          <StyledFormControl type="tel" placeholder="City" />
          <Row className="column-gap-3 gx-0 gy-2">
            <Col sm={12} md={7}>
              <Form.Select placeholder="Country">
                <option>Some</option>
                <option>Few</option>
                <option>Country</option>
              </Form.Select>
            </Col>
            <Col sm={12} md={4}>
              <StyledFormControl type="tel" placeholder="Zip" />
            </Col>
          </Row>
        </Form.Group>
        <Button className="col-7" onClick={onNextStep}>
          Continue
        </Button>
      </Form>
    </>
  );
}
