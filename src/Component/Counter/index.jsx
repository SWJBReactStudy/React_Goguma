import React, {useContext} from 'react';
import ConuterButton from './ConunterButton';
import {CounterContext} from '../../Provider/CounterProvider';


const Counter = () => {

  const [count] = useContext(CounterContext);

  return (
    <>

      
      <div>{count}</div>
      <ConuterButton/>


    </>
  );
}

export default Counter;