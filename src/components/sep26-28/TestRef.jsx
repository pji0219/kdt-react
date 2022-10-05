import React, { useRef, useState } from 'react';

function TestRef() {
  const [text, setText] = useState('안녕하세요!');

  const inputValue = useRef();

  const onChageText = () => {
    let inputText = inputValue.current.value;
    setText(inputText);
  };

  return (
    <div>
      <h1>{text}</h1>
      <input type='text' ref={inputValue} onChange={onChageText} />
    </div>
  );
}

export default TestRef;
