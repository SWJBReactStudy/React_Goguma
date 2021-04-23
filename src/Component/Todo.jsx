import React, {useState} from 'react';
import useInputs from '../Component/useInputs';

const Todo = () => {

    const [list, setList] = useState([]);

    const [num, setNum] = useState(1);

    const [{title, content}, onChangeInputs, reset] = useInputs({
        title : '',
        content: ''
    });

    const onClickList = () => {
        setList([
            ...list,
            {
                id : num,
                title : title,
                content : content,
                flag : true
            }
        ]);
        reset();
        setNum(num + 1);
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
        setList(list.filter(n => n.id !== id))
    }

    return(
        <div>
            <label>제목</label>
            <input type="text" name="title" onChange={onChangeInputs} value={title}/>
            <br/>
            <label>내용</label>
            <input type="text" name="content" onChange={onChangeInputs} value={content}/>
            <br/>
            <button onClick={onClickList}>추가</button>
            <br/>
            <div>
            {list.map(list => (
                <Show list={list} key={list.id} onRemove={onRemove} onFix={onFix}/>
            ))}
            </div>
        </div>
    );
}

export default Todo;