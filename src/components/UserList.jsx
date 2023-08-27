import React, {useEffect, useState} from 'react';

export const UserList = ({endPoint}) => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
            const data = await response.json();
            //console.log(endPoint, data);
            setData(data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
        // useEffect sirve para llamar una vez al inicio o para llamar cuando cambie una dependencia
        // console.log('useEffect OK');
     }, [endPoint])


    return (
        <ul>
            { endPoint == 'users'
                ? data.map(item => <li key={item.id}>{item.name}</li>)
                : data.map((item) => {
                        if (item.id <= 10) {
                            return <li className='small border-bottom m-0' key={item.id}>{item.body}</li>}
                        })
                        
            }

        </ul>
    );
};
