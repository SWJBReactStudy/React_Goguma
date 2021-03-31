import React, {useState} from 'react';

const Todo = () => {

    const [box, setBox] = useState('');

    const [list, setList] = useState([]);

    const [num, setNum] = useState(1);

    const Show = ({list}) => {
        return(
            <>
                <div style={{backgroundColor: "gray", color: "pink"}}>
                    <div>{list.title} <br/> {list.content} </div>
                </div>
                <br/>
            </>
        );
    }

    const onClickList = () => {
        setList([
            ...list,
            {
                id : num,
                title : box.title,
                content : box.content
            }
        ]);
        setNum(num + 1);
    }


    const onChangeBox = (e) => {
        setBox({
            ...box,
            [e.target.name] : e.target.value
        });
    }

    return(
        <div>
            <label>제목</label>
            <input type="text" name="title" onChange={onChangeBox} value={box.title}/>
            <br/>
            <label>내용</label>
            <input type="text" name="content" onChange={onChangeBox} value={box.content}/>
            <br/>
            <button onClick={onClickList}>추가</button>
            <br/>
            <div>
            {list.map(list => (
                <Show list={list} key={list.id} />
            ))}
            </div>
        </div>
    );
}

export default Todo;