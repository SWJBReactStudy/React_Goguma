import { useReducer } from 'react';

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



    return [todoList, dispatch];
}


export default useCustomReducer;