import { useState } from "react";
import PropTypes from 'prop-types';
import {AgregarTareaForm} from './AgregarTareaForm';

export const Condicionales = () => {

    const Item = ({nombre, visto}) => {
        return (
            <li className={`small p-1 bg-gradient ${visto && 'bg-success'} ${!visto && 'bg-danger'} `}>
                {nombre}&nbsp;{visto ? '✅' : "🟥"}
            </li>
        )
    }

    let List = [
        {nombre: "000", visto: true},
        {nombre: "111", visto: true},
        {nombre: "222", visto: false},
        {nombre: "333", visto: true},
        {nombre: "444", visto: false}
    ];

    const  [arrList, setArrList ] = useState(List);

    const addToList = ()=> {
        setArrList([...arrList, {nombre: 'Desde Boton', visto:false} ]) // agrega un elemento al array
    }

    const onAddTask (val) => {
        console.log(val);
        
    }

    return (
        <div className='component'>
            <h3>COMPONENT CONDICIONALES</h3>

            <AgregarTareaForm addTask={setArrList}></AgregarTareaForm>

            <ul className="list-unstyled">
                {arrList.map( item => <Item key={item.nombre} nombre={item.nombre} visto={item.visto}></Item>)}
            </ul>
            <button className="btn btn-primary" onClick={()=>addToList()}>+ Add</button>
        </div>
    )
}



Condicionales.propTypes = {
    nombre: PropTypes.string,
    visto: PropTypes.bool,
};