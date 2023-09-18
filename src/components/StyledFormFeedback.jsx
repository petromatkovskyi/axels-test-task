import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const StyledFormFeedback = styled(Form.Control.Feedback)`
  color: red;
  background: white;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  top: -2;
  padding: 0.1rem 0.25rem;
  position: static;
  margin-top: 0.25rem;
`;

export default StyledFormFeedback;
