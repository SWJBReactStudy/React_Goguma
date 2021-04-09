import React, { useReducer, useRef } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'WRITE':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            };
        case 'ADD_TODO':
            return {
                inputs: initialState.inputs,

                users: [
                    ...state.users,
                    {
                        id: action.id,
                        title: action.title,
                        content: action.content
                    }]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                users : state.users.filter(users => users.id !== action.id)
            }
        };
    };


const initialState = {
    inputs: {
        title: '',
        content: ''
    },
    users: [

    ]
};

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;
    const { title, content } = state.inputs;
    const nextId = useRef(0);

    const onChangeBox = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'WRITE',
            name,
            value
        });
    }

    const onClickList = () => {
        dispatch({
            type: 'ADD_TODO',
            id: nextId.current,
            title: state.inputs.title,
            content
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


    }

    const onRemove = (id) => {
        dispatch({
            type : 'DELETE_TODO',
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
                {users.map(list => (
                    <Show list={list} key={list.id} />))}
            </div>
        </div>
    );
}

export default UseReducer;