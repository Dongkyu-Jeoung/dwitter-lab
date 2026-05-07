import React from 'react';
import { getFetchData } from '../util/fetchDatas.js';
import { useState, useEffect } from 'react';

export default function CompUsers() {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            const jsonData = await getFetchData('/users/');
            setUserList(jsonData.users);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>GET :: User List</h1>
            <table border="1" style={{width:"400px"}}>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>ID</th>
                        <th>PASSWORD</th>
                    </tr>
                </thead>
                    
                <tbody>
                    {userList.map( (user, idx) => 
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{user.id}</td>
                            <td>{user.pwd}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

