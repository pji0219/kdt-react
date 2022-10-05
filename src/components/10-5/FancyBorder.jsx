import React from 'react';

function FancyBorder(props) {
  return (
    <div style={{ border: `3px solid ${props.color}` }}>{props.children}</div>
  );
}

export default FancyBorder;
