import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const StyledFormFeedback = styled(Form.Control.Feedback)`
  color: red;
  background: white;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
`;

export default StyledFormFeedback;
