import React, { useState } from 'react';

const Todo = () => {

    const [write, setWrite] = useState({
        title : '',
        content : ''
    });
    const [list, setList] = useState([]);
    const [num, setNum] = useState(1);

    const onChangeWrite = (e) => {
        setWrite({
            ...write,
            [e.target.name] : e.target.value
        });
    }

    const onClickAdd = () => {
        setList([
            ...list,
            {
                title : write.title,
                content : write.content,
                id : num
            }
        ]);
        setNum(num + 1);
    }

    const Show = ({list}) => {
        return (
            <div>
                <div>{list.title}</div>
                <div>{list.content}</div>
                <br/>
            </div>
        );
    }

    return(
        <div>
            <label>제목</label>
            <input type="text" name="title" onChange={onChangeWrite} value={write.title}/>
            <br/>
            <label>내용</label>
            <input type="text" name="content" onChange={onChangeWrite} value={write.content}/>
            <br/>
            <button onClick={onClickAdd}>추가</button>
            {list.map((list, i) => (
                <Show list={list} key={list.id}/>
            ))}
        </div>
    );
}

export default Todo;