import React, {createContext, useState} from 'react';

export const CounterContext = createContext();

const ConutProvider = ({children}) => {
    const [count, setCount] = useState(0);
    return(
        <CounterContext.Provider  value={[count, setCount]}>
            {children}
        </CounterContext.Provider>
    );
}


export default ConutProvider;