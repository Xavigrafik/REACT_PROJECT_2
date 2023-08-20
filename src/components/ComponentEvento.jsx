import {useState } from 'react'
import PropTypes from 'prop-types';

export const ComponentEvento = ({value}) => {
    
    const [contador, setContador] = useState(value);

    // FUNCIONES ===========================
    const addCount = () =>{
        setContador(contador + 10);
    }

    const reset = () =>{
        setContador(0);
    }

    // COMPONENTE DESDE VARIAVBLE
    const BotonSum = () => {
        return (
            <button onClick={addCount}>Click me!</button>
        )
    }


    return (
        <div className='component'>

            <h3>COMPONENT EVENTO </h3>

           <BotonSum></BotonSum>
            <button onClick={reset}>Reset!</button>

            <p>Contador: {contador}</p>
        </div>
    )
}


ComponentEvento.propTypes = {
    value: PropTypes.number,
};
