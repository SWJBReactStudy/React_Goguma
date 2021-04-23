import React, { } from 'react';
import useCustomReducer from '../Component/useCustomReducer.js';





const UseReducer = () => {

    const [todoList, onChangeTyping, onClickAdd, onClickDelete, onClickFix] = useCustomReducer();

    
    


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