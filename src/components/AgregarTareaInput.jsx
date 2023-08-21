import { useState } from "react"

export const AgregarTareaInput = () => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = (e) => {
        // console.log(inputValue);
        setinputValue(e.target.value)
    }
  return (
    <input
        type="text" 
        placeholder="Add tarea"
        className="mb-3"
        value={inputValue}
        onChange={(e)=>{onInputChange(e)}}
    />
  )
}
