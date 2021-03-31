import React, { useState } from 'react';

const Form = () => {
    const [student, setStudent] = useState('');

    const onChangeStudent = (e) => {
        setStudent({
            ...student,
            [e.target.name] : e.target.value
        });
    }

    return(
        <div>
            <label>닉네임</label>
            <input type="text" name="nickname" onChange={onChangeStudent} value={student.nickname} />
            <br/>
            <label>티어</label>
            <input type="text" name="tier" onChange={onChangeStudent} value={student.tier}/>
            <div>닉네임 : {student.nickname}</div>
            <div>티어 : {student.tier}</div>
        </div>
    );
}

export default Form;