import React, {useReducer, useState, useRef} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_INPUT' :
            return {
                ...state,
                inputs : {
                    ...state.inputs,
                    [action.name] : action.value
                }
            };
        case 'ADD_TODO' :
            return {
                inputs : initialState.inputs,
                todos : [
                    ...state.todos,
                    action.todos
                ]
            };
        case 'DETELE_TODO' :
            return {
                ...state,
                todos : state.todos.filter(x => x.id !== action.id)
            };
        default :
            return state;
    }
}
const initialState = {
    inputs: {
      title: '',
      content: ''
    },
    todos: [
       
    ]
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { todos } = state;
    const { title, content } = state.inputs;
    const nextId = useRef(0);

    const [list, setList] = useState([]);

    const [num, setNum] = useState(1);

    const onChangeBox = (e) => {
        const { name, value } = e.target;
        dispatch(
            {
                type: 'CHANGE_INPUT',
                name,
                value
            }
        );
    }

    const onClickList = () => {
        dispatch(
            {
                type: 'ADD_TODO',
                todos : {
                    id : nextId.current,
                    title,
                    content
                }
            }
        );
        nextId.current += 1;
    }

    const Show = ({list, onRemove, onFix}) => {
        return(
            <>
                <div style={{backgroundColor: "gray", color: "pink"}}>
                    <div>{list.title} <br/> {list.content} </div>
                    <button onClick={() => onRemove(list.id)}>삭제</button>
                    <button onClick={() => onFix(list.id)}>수정</button>
                </div>
                <br/>
            </>
        );
    }

    const onFix = (id) => {
        const temp = prompt();
        
        setList(list.map(n => 
            n.id === id ? {
                ...n,
                content : temp
            } : {...n}
        )
    )
        
    }

    const onRemove = (id) => {
        dispatch(
            {
                type: 'DETELE_TODO',
                id
            }
        );
    }

    return(
        <div>
            <label>제목</label>
            <input type="text" name="title" onChange={onChangeBox} />
            <br/>
            <label>내용</label>
            <input type="text" name="content" onChange={onChangeBox}/>
            <br/>
            <button onClick={onClickList}>추가</button>
            <br/>
            <div>
            {todos.map(todos => (
                <Show list={todos} key={todos.id} onRemove={onRemove} onFix={onFix}/>
            ))}
            </div>
        </div>
    );
}

export default UseReducer;