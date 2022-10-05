import React from 'react';
import Dialog from './10-5/Dialog';

function WelcomeDialog(props) {
  const onClick = () => {
    alert(props.alertMessage);
  };

  return (
    <>
      <Dialog
        color='orange'
        title="Welcome to summoner's lift"
        message='소환사의 협곡에 오신 것을 환영 합니다.'
      />
      <button onClick={onClick}>{props.content}</button>
    </>
  );
}

export default WelcomeDialog;
