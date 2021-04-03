import React, { useState } from 'react';

const Todo = () => {

    const [box, setBox] = useState('');
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);

    const onChangeTyping = (e) => {
        setBox({
            ...box,
            [e.target.name]: e.target.value,
        });

    }

    const onClickUpdate = () => {
        setList([
            ...list,
            {
                title: box.title,
                content: box.content,
                id: num
            }
        ])
        setNum(num + 1);
    }

    const onClickDetele = (id) => {
        setList(
            list.filter(x => x.id !== id)
        )
    }

    const onClickFix = (id) => {
        const temp = prompt();
        setList(
            list.map(x =>
                x.id === id ?
                    {
                        ...x,
                        content: temp
                    }
                    : { ...x }
            )
        );
    }

    const Show = ({ list }) => {
        return (
            <div>
                <div>
                    <br />
                    {list.title}
                    <br />
                    {list.content}
                    <br />
                    <button onClick={() => { onClickDetele(list.id) }}>삭제</button>
                    <button onClick={() => { onClickFix(list.id) }}>수정</button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <label>제목</label>
            <input type="text" name="title" onChange={onChangeTyping} />
            <br />
            <label>내용</label>
            <input type="text" name="content" onChange={onChangeTyping} />
            <br />
            <button onClick={onClickUpdate}>추가</button>
            {list.map(list => (
                <Show list={list} key={list.id} />
            ))}
        </div>
    );
}

export default Todo;