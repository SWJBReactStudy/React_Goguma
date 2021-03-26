import React, { useState } from 'react';
import Count from './Count';

const App = () => {
  const [count, setCount] = useState(0);
  
  const onClickPlus = () => {
    setCount(count + 1);
/*
const setCount = (parameter) => {
count = parameter;
}*/
  }
  const onClickMinus = () => {
    setCount(count - 1);
  }

  return (
    <>
    <Count count={count} setCount={setCount}
    onClickPlus={onClickPlus} onClickMinus={onClickMinus} />
    </>
  );
}

export default App;