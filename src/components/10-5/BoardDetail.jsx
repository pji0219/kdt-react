import React from 'react';
import Header from './Header';
import { useParams, useLocation } from 'react-router-dom';

function BoardDetail(props) {
  const params = useParams();
  // const { boardID } =useParams();
  const location = useLocation();

  return (
    <>
      <Header />
      <h2>{params.boardID} 번 게시글 내용 입니다.</h2>
      <p>쿼리: {location.search}</p>
      <p>주소: {location.pathname}</p>
      <p>해쉬: {location.hash}</p>
    </>
  );
}

export default BoardDetail;
