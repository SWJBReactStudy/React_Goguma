import { useState } from 'react';

const useInputs = (init) => {
    const [form, setForm] = useState(init);

    const onChangeInputs = (e) => {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name]: value }));
    };
    const reset = () => setForm(init);
    return [form, onChangeInputs, reset];
}

export default useInputs;