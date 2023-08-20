const Items = ({nombre, visto}) => {
    return(
        <li>{nombre} &nbsp; {visto ? '✅' : "🟥"} {visto && '🆗'}</li>
    )
}



export const Condicionales = () => {
    return (
        <div className='component'>
            <h3>COMPONENT CONDICIONALES</h3>

            <ul>
                <Items nombre={'lala'} visto={false}></Items>
                <Items nombre={'lololo'} visto={true}></Items>
                <Items nombre={'lilili'} visto={false}></Items>
                <Items nombre={'lululu'} visto={false}></Items>
            </ul>
        </div>
    )
}