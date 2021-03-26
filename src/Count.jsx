import React, {} from 'react';

const Count = ({count, setCount, onClickPlus, onClickMinus}) => {
  return (
    <>
      <div>{count}</div>
      <button onClick = {onClickPlus}>더하기</button>
      <button onClick = {onClickMinus}>빼기</button>
    </>
  );
}

export default Count;