import React, { useEffect, useState } from 'react';

const Effect = () => {
    const [text, setText] = useState('');
    const [array, setArray] = useState([
        {
            id: 1,
            active: true
        },
        {
            id: 2,
            active: false
        },
        {
            id: 3,
            active: true
        },
        {
            id: 4,
            active: true
        }
    ]);
    useEffect(() => {
        console.log('랜더링');
        return () => { console.log('del'); } //클린업
    }, [text]); //대괄호안에 있는게 업데이트될때마다 바뀜
    //useEffect 안에 if쓰기

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            console.log('눌렀다');
            return () => { document.removeEventListener("keydown") }
        })
    }, [])

    useEffect(() => {
        const temp = array.filter(x => x.active === true);
        console.log(temp.length);
    }, [array])
    return (
        <div>
            <label>Effect</label>
            <input type="text" name="text" onChange={(e) => { setText(e.target.value) }} />
        </div>
    );
}

export default Effect;