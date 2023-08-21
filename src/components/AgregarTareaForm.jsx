import { useState } from 'react';
// import {AgregarTareaInput} from './AgregarTareaInput';

export const AgregarTareaForm = ({ addTask }) => {

    const [inputValue, setInputValue] = useState('inputValue');

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        const envio = {
            nombre : inputValue,
            visto : false,
        }
        
        console.log('inputValue:', inputValue);
        console.log('addTask:', addTask);
        
        e.preventDefault();
        addTask(tareas => [...tareas], envio)
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

            {/* <input type="submit" value="Submit" /> */}
            {/* <AgregarTareaInput tareas={setArrList}></AgregarTareaInput> */}
        </form>
    );
};
