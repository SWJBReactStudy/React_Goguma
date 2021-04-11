import React, { useReducer, useRef } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'WRITE_TODO':
            return {
                 ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            };
        case 'ADD_TODO':
            return {
                inputs: '',
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        title: action.title,
                        content: action.content
                    }
                ]
            }
        case 'DELETE_TODO':
            return {
                todos : state.todos.filter(x => x.id !== action.id)
            }
        case 'FIX_TODO':
            return {
                todos : state.todos.map(x =>
                    x.id === action.id ?
                    {
                        ...x,
                        content : action.temp
                    } :
                    {...x}
                )
            }
    };
};


const initialState = {
    inputs: {
        title: '',
        content: ''
    },
    todos: [

    ]
};

const UseReducer = () => {

    const [todoList, dispatch] = useReducer(reducer, initialState);
    const { todos } = todoList;
    const nextId = useRef(0);

    const onChangeBox = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'WRITE_TODO',
            name,
            value
        });
    }

    const onClickList = () => {
        dispatch({
            type : 'ADD_TODO',
            id: nextId.current,
            title: todoList.inputs.title,
            content: todoList.inputs.content
        });
        nextId.current += 1;
    }

    const Show = ({ list }) => {
        return (
            <>
                <div style={{ backgroundColor: "gray", color: "pink" }}>
                    <div>{list.title} <br /> {list.content} </div>
                    <button onClick={() => onRemove(list.id)}>삭제</button>
                    <button onClick={() => onFix(list.id)}>수정</button>
                </div>
                <br />
            </>
        );
    }

    const onFix = (id) => {
        const temp = prompt();
        dispatch({
            type : 'FIX_TODO',
            temp,
            id
        });
    }

    const onRemove = (id) => {
        dispatch({
            type: 'DELETE_TODO',
            id
        });
    }

    return (
        <div>
            <label>제목</label>
            <input type="text" name="title" onChange={onChangeBox} />
            <br />
            <label>내용</label>
            <input type="text" name="content" onChange={onChangeBox} />
            <br />
            <button onClick={onClickList}>추가</button>
            <br />
            <div>
                {todos.map(list => (
                    <Show list={list} key={list.id} />))}
            </div>
        </div>
    );
}

export default UseReducer;