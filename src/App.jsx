import React, { useState } from 'react';
import Count from './Count';
import Render from './Render';

const App = () => {
  const [count, setCount] = useState(0);

  const [isRender, setIsRender] = useState(true);

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
      <Render isRender={isRender} setIsRender={setIsRender} />
    </>
  );
}

export default App;