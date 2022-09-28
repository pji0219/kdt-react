import { useState } from 'react';

function CustomObj(props) {
  const [idx, setIdx] = useState(0);

  const onChageProfile = () => {
    if (idx < 2) {
      setIdx(idx + 1);
    } else if (idx >= 2) {
      setIdx(0);
    }
  };

  return (
    <div>
      <h1>이름: {props.obj[idx].name}</h1>
      <h1>나이: {props.obj[idx].age}</h1>
      <h1>별명: {props.obj[idx].nickname}</h1>
      <button onClick={onChageProfile}>프로필 변경</button>
    </div>
  );
}

export default CustomObj;
