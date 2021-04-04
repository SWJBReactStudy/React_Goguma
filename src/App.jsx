import React, { useState } from 'react';
import Count from './Component/Count';
import Render from './Component/Render';
import Form from './Component/Form';
import Todo from './Component/Todo';
import Effect from './Component/Effect';
import Styled from './Component/Styled';
import styled from 'styled-components';

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
      {/* <Count count={count} setCount={setCount}
        onClickPlus={onClickPlus} onClickMinus={onClickMinus} />
      <Render isRender={isRender} setIsRender={setIsRender} />
      <Form /> */}
      <Todo />
      <br/>
      <Effect />
      <br/>
      <Styled />
    </>
  );
}

export default App;