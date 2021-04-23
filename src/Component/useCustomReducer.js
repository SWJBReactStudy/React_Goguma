import { useReducer, useRef } from 'react';

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
                ...state,
                list: state.list.filter(x => x.id !== action.id)
            }
        case "FIX_TODO":
            return {
                ...state,
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

const useCustomReducer = () => {
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

    return [todoList, onChangeTyping, onClickAdd, onClickDelete, onClickFix];
}


export default useCustomReducer;