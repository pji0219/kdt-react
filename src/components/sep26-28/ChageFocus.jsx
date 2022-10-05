import { useRef } from 'react';

function ChageFocus() {
  const inputOne = useRef();
  const inputTwo = useRef();

  const changeFocusOne = () => {
    inputOne.current.focus();
  };

  const changeFocusTwo = () => {
    inputTwo.current.focus();
  };

  return (
    <div>
      <input type='text' ref={inputOne} />
      <input type='text' ref={inputTwo} />
      <button onClick={changeFocusOne}>1번</button>
      <button onClick={changeFocusTwo}>2번</button>
    </div>
  );
}

export default ChageFocus;
