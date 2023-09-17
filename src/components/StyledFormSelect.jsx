import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const StyledFormSelect = styled(Form.Select)`
  color: green;
  border-color: gray;
  padding: 0.5rem 1rem;

  &.is-invalid {
    background: yellow;
    shadow-box: 1px 1px 1px;
  }
  &::focus {
    box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.75);
  }
`;

export default StyledFormSelect;
