import React, { useEffect, useMemo, useState } from 'react';

function UsingUseMemo() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(false);

  const location = useMemo(() => {
    return {
      where: isKorea ? '한국' : '외국',
    };
  }, [isKorea]);

  useEffect(() => {
    console.log('useEffect 호출');
  }, [location]);

  return (
    <div>
      <h1>숫자 증감</h1>
      <input
        type='number'
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <br />
      <br />
      <h1>Where are you?</h1>
      <h2>위치: {location.where}</h2>
      <button onClick={() => setIsKorea(!isKorea)}>나라 변경</button>
    </div>
  );
}

export default UsingUseMemo;
