import React, { useReducer, useRef } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case "WRITE_TODO":
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            }
        case "ADD_TODO":
            return {
                inputs: state.inputs,
                list: [
                    ...state.list,
                    {
                        title: action.title,
                        content: action.content,
                        id: action.id
                    }

                ]
            }
        case "DELETE_TODO":
            return {
                list: state.list.filter(x => x.id !== action.id)
            }
        case "FIX_TODO":
            return {
                list: state.list.map(x => x.id === action.id ?
                    {
                        ...x,
                        content: action.temp
                    } : { ...x })
            }
    }
}

const init = {
    inputs: {
        title: '',
        content: ''
    },
    list: [

    ]
}

const UseReducer = () => {
    const [todoList, dispatch] = useReducer(reducer, init);
    const nextId = useRef(0);

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
            <input type="text" name="title" onChange={onChangeTyping} value={todoList.list.title} />
            <br />
            <label>내용</label>
            <input type="text" name="content" onChange={onChangeTyping} value={todoList.list.content} />
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