import React from 'react';
import { Overlay, Popover } from 'react-bootstrap';

export default function Feedback({ title, show, target, ref }) {
  return (
    <Overlay
      show={show}
      target={target}
      placement="top"
      container={ref}
      containerPadding={5}
    >
      <Popover id="popover-contained" className="text-warning bg-white">
        <Popover.Body className="text-warning p-1">{title}</Popover.Body>
      </Popover>
    </Overlay>
  );
}
