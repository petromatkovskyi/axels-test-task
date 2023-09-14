import { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import StyledFormControl from './StyledFormControl';

function TriggerExample() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <StyledFormControl onClick={handleClick} />

      <Overlay
        show={show}
        target={target}
        placement="top"
        container={ref}
        containerPadding={5}
      >
        <Popover id="popover-contained" className="text-warning bg-white">
          <Popover.Body className="text-warning p-1">
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

export default TriggerExample;

function styledFormControlWithFeedback(WrappedComponent) {}
