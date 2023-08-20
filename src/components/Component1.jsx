
import React, {useState} from 'react'
import '../css/componente1.css'
   
let arr = ['uno', 'dos', 'tres', 'cuatro', 'cinco' ];


export const Component1 = () => {

    const[nombre, setNombre] = useState('default!');
    const classes = `componente1 component`
    
    const cambiarNombre = (nom)=> {
        if (nom) {
            setNombre(nom);
        } else {
            setNombre('??')
        }
    }

  return (
    <div className={classes}>
        <h3>COMPONENTE 1</h3>
        <p>nombre : <strong className={nombre.length >= 4 ? 'bg-verde' : 'bg-rojo'}>{nombre}</strong></p>
        <input onChange={e=>(cambiarNombre(e.target.value))}></input>
        <button onClick={e => (cambiarNombre('NUEVO NOMBRE BOTON'))}>Cambiar nombre</button>
        <ul>
            {
                arr.map((item, i)=>{
                    return (<li key={i}> {item} - {i}</li>);
                })
            }
        </ul>

        <p>Pinto el array: {arr}</p>

    </div>
  )
}
