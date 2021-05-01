import React, {useContext} from 'react';
import {CounterContext} from '../../Provider/CounterProvider';

const ConuterButton = () => {
    const [count, setCount] = useContext(CounterContext);

    const onClickPlus = () => {
        setCount(count + 1);
    }

    const onClickMinus = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick = {onClickPlus}>+</button>
            <button onClick = {onClickMinus}>-</button>
        </div>
    );
}

export default ConuterButton;