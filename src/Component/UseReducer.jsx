import React, {useRef } from 'react';
import useCustomReducer from '../Component/useCustomReducer.js';





const UseReducer = () => {

    const nextId = useRef(0);
    const [todoList, dispatch] = useCustomReducer();

    
    const onChangeTyping = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: "WRITE_TODO",
            name,
            value
        });
    }

    const onClickAdd = () => {
        dispatch({
            type: "ADD_TODO",
            id: nextId.current,
            title: todoList.inputs.title,
            content: todoList.inputs.content
        });
        nextId.current += 1;
    }

    const onClickDelete = (id) => {
        dispatch({
            type: "DELETE_TODO",
            id
        });
    }

    const onClickFix = (id) => {
        const temp = prompt();
        dispatch({
            type: "FIX_TODO",
            id,
            temp
        });
    }


    const Show = ({ list }) => {
        return (
            <>
                <div style={{ backgroundColor: "pink" }}>
                    <div>{list.title}</div>
                    <div>{list.content}</div>
                </div>
                <button onClick={() => onClickDelete(list.id)}>삭제</button>
                <button onClick={() => onClickFix(list.id)}>수정</button>
                <br />
                <br />
            </>
        );
    }

    return (
        <div>
            <label>제목</label>
            <input type="text" name="title" onChange={onChangeTyping} value={todoList.inputs.title} />
            <br />
            <label>내용</label>
            <input type="text" name="content" onChange={onChangeTyping} value={todoList.inputs.content} />
            <br />
            <button onClick={onClickAdd}>추가</button>
            <br />
            <br />
            {todoList.list.map(list => (
                <Show list={list} id={list.id} />
            ))}
        </div>
    );
}

export default UseReducer;