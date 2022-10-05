import React from 'react';
import Dialog from './Dialog';

function SignUpDialog() {
  return (
    <Dialog
      color='skyblue'
      title='안내'
      message='회원 가입이 필요한 회원 입니다.'
    >
      <a href='#'>회원 가입 페이지로 이동</a>
    </Dialog>
  );
}

export default SignUpDialog;
