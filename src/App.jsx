import { useEffect, useRef, useState } from 'react';
import TestUseMemo from './components/sep30/TestUseMemo';
import UsingUseMemo from './components/sep30/UsingUseMemo';

function App() {
  // const [show, setShow] = useState(false);
  // const [text, setText] = useState('보이기');
  // const focusRef = useRef();

  // useEffect(() => {
  //   focusRef.current.focus();
  // }, []);

  // const onChangeBtnText = () => {
  //   if (text === '보이기') {
  //     setText('숨기기');
  //   } else if (text === '숨기기') {
  //     setText('보이기');
  //   }
  // };

  return (
    <div className='App'>
      <UsingUseMemo />
    </div>
  );
}

export default App;
