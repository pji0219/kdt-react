import React, { useEffect, useRef, useState } from 'react';

function PracticeTimer() {
  const [count, setCount] = useState(0);
  // const time = useRef(0); useRef를 사용해서도 구현 가능
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
      // timer.current + 1;
      console.log(count);
      // console.log(time.current)
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <>
      {show && <h1>{count}</h1>}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        시간
      </button>
    </>
  );
}

export default PracticeTimer;
