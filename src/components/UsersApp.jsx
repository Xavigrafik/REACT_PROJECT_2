import React, {useEffect, useState} from 'react';
import {UserList} from './UserList'
export const UsersApp = () => {

    const [endPoint, setendPoint] = useState('users')

    const handleFetch = () => {
        setendPoint('comments');
    }
    
    return (
        <div className="component">
            <h3>USERS LIST</h3>
            <UserList endPoint={endPoint}></UserList>
            <button type="button" onClick={handleFetch}>Fetch Users</button>
        </div>
    );
};
