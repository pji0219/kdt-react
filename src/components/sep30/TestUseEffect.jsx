import { useEffect, useRef, useState } from 'react';

function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력해 주세요!');
  const inputValue = useRef();

  const onButtonClick = () => {
    setCount(count + 1);
  };

  const onInputChange = () => {
    setText(inputValue.current.value);
  };

  useEffect(() => {
    console.log('🧨 렌더링 될 때마다 불러와지는 useEffect');
  });

  useEffect(() => {
    console.log('🎇 버튼 클릭 될 때마다 불러와지는 useEffect');
  }, [count]);

  useEffect(() => {
    console.log('🎊 키 입력 될 때마다 불러와지는 useEffect');
  }, [text]);

  useEffect(() => {
    console.log('🎆 최초 렌더링시 에만 실행되는 useEffect');
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>+1 버튼</button>
      <br />
      <br />
      <br />
      <input type='text' ref={inputValue} onChange={onInputChange} />
      <h1>{text}</h1>
    </>
  );
}

export default TestUseEffect;
