import React from 'react';

export default function Dialog(props) {
  return (
    <div
      style={
        typeof props.color !== 'undefined'
          ? { backgroundColor: props.color }
          : { backgroundColor: 'orange' }
      }
    >
      {typeof props.title === 'string' ? <h1>{props.title}</h1> : props.title}
      <p>{props.message}</p>
      {props.children}
      {typeof props.color !== 'undefined'
        ? null
        : alert('색상값이 안들어 왔습니다!')}
    </div>
  );
}
