import React, { useState } from 'react';

function PleaseClick() {
  const [message, setMessage] = useState('클릭해 주세요');

  const onClick = () => {
    if (message === '클릭해 주세요') {
      setMessage('다시 클릭해 주세요');
    } else if (message === '다시 클릭해 주세요') {
      setMessage('클릭해 주세요');
    }
  };

  return (
    <div>
      <button onClick={onClick}>{message}</button>
    </div>
  );
}

export default PleaseClick;
