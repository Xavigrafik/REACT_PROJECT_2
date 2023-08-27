import { useState } from 'react';
import {AgregarTareaInput} from './AgregarTareaInput';

export const AgregarTareaForm = ({ addTask }) => {

    const [inputValue, setInputValue] = useState('');

    const [arrList, setArrList] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        addTask(inputValue)
        setInputValue('') // clear input
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Add tarea"
                className="mb-3"
                value={inputValue}
                onChange={onInputChange}
                />
            <input type="submit" value="Submit" />
            <hr />
            {/* <AgregarTareaInput tareas={setArrList}></AgregarTareaInput> */}
        </form>
    );
};
