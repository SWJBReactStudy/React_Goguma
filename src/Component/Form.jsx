import React, { useState } from 'react';

const Form = () => {
    const [student, setStudent] = useState('');

    const onChangeStudent = (e) => {
        setStudent({
            ...student,
            [e.target.name] : e.target.value,
        });
    };

    return(
        <div>
            <label>이름</label>
            <input name="name" type="text" onChange={onChangeStudent} value={student.name}/>
            <br/>
            <label>학번</label>
            <input name="hakbun" type="text" onChange={onChangeStudent} value={student.hakbun}/>
            
            <div>
                <p>이름 : {student.name}</p>
                <p>학번 : {student.hakbun}</p>
            </div>
        </div>
    );
}

export default Form;