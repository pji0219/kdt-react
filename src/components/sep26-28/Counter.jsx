import { useState } from 'react';

function Counter() {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  };

  const decrease = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}

export default Counter;
