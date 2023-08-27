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
        { id : 0, nombre: "000", visto: true},
        { id : 1, nombre: "000", visto: true},
        { id : 2, nombre: "111", visto: true},
        { id : 3, nombre: "222", visto: false},
        { id : 4, nombre: "333", visto: true},
        { id : 5, nombre: "444", visto: false}
    ];

    const  [arrList, setArrList ] = useState(List);

    const addToList = ()=> {
        setArrList([...arrList, {id : arrList.length, nombre: 'Desde Boton', visto:false} ]) // agrega un elemento al array
    }

    const onAddTask = (val) => {
        if (val < 1) {
            alert('Input vacio!');
            return
        }
        const envio = {
            id : arrList.length,
            nombre : val,
            visto : false,
        }

        setArrList([...arrList, envio])
        
    }

    return (
        <div className='component'>
            <h3>COMPONENT CONDICIONALES {arrList.length}</h3>

            <AgregarTareaForm addTask={onAddTask}></AgregarTareaForm>

            <ul className="list-unstyled">
                {arrList.map( item => <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>)}
            </ul>
            <button className="btn btn-primary" onClick={()=>addToList()}>+ Add</button>
        </div>
    )
}



Condicionales.propTypes = {
    nombre: PropTypes.string,
    visto: PropTypes.bool,
};