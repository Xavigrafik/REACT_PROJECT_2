import {useState } from 'react'
import PropTypes from 'prop-types';

export const ComponentEvento = ({value}) => {
    
    const [contador, setContador] = useState(value);

    const addCount = () =>{
        setContador(contador + 10);
    }

    const reset = () =>{
        setContador(0);
    }

    return (
        <div className='component'>

            <h3>COMPONENT EVENTO </h3>

            <button onClick={addCount}>Click me!</button>
            <button onClick={reset}>Reset!</button>

            <p>Contador: {contador}</p>
        </div>
    )
}


ComponentEvento.propTypes = {
    value: PropTypes.number,
};
