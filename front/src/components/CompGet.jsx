import React from 'react';
import {useState, useEffect} from 'react';
import { getFetchData } from '../util/fetchDatas';

export default function CompGet() {
    const [list, setList] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            // const url = "http://localhost:9000/api/get";
            // const response = await fetch(url, { method: "GET" });
            const jsonData = await getFetchData(`/api/get`);
            setList(jsonData.fruits);
        }
        fetchData();
    }, []);

    console.log('list::', list);
    

    return (
        <div style={{width:"50%", margin: "auto"}}>
            <h1>Fruits List</h1>
            <table border="1" style={{width:"400px"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Emoji</th>
                    </tr>
                </thead>

                <tbody>
                    {list?.map( (fruit, idx) => 
                        <tr key={idx} style={{textAlign: "center"}}>
                            <td>{fruit.name}</td>
                            <td>{fruit.color}</td>
                            <td>{fruit.emoji}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

