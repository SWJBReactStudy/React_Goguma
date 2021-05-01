import React, { useState } from 'react';
import Counter from './Component/Counter';
import Render from './Component/Render';
import Form from './Component/Form';
import Todo from './Component/Todo';
import Effect from './Component/Effect';
import Styled from './Component/Styled';
import styled from 'styled-components';
import UseReducer from './Component/UseReducer';
import ConutProvider from './Provider/CounterProvider';

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
      <ConutProvider>
        {/* <Count count={count} setCount={setCount}
          onClickPlus={onClickPlus} onClickMinus={onClickMinus} />
        <Render isRender={isRender} setIsRender={setIsRender} />
        <Form /> */}
        {/* <Todo />
        <br/>
        <Effect />
        <br/>
        <Styled /> */}
        {/* <UseReducer /> */}
        <Counter />
      </ConutProvider>
    </>
  );
}

export default App;