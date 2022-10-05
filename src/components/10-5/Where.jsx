import React from 'react';

function Where() {
  const where = prompt('어디로 갈까요? left / right');

  if (where === 'left') {
    return (
      <>
        <h1>여기는 왼쪽 입니다.</h1>
      </>
    );
  } else if (where === 'right') {
    return (
      <>
        <h1>여기는 오른쪽 입니다.</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>값을 잘못 입력 하셨습니다.</h1>
      </>
    );
  }
}

export default Where;
