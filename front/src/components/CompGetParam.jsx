import React, {useState, useEffect} from 'react';
import { getFetchData } from '../util/fetchDatas.js';

export default function CompGetParam() {
    const [list, setList] = useState([]);
    const [result, setResult] = useState('');


    useEffect(()=>{
        const fetchData = async() => {
            // const url = "http://localhost:9000/api/products";
            // const response = await fetch(url, { method:"GET" });
            const jsonData = await getFetchData(`/api/products`);
            setList(jsonData.products);
        }
        fetchData();
    }, []);

    const handleProductDetail = async (item) => {
        // const url = `http://localhost:9000/api/products/${item.pid}`;
        // const response = await fetch(url, { method : "GET" });
        const jsonData = await getFetchData(`/api/products/${item.pid}`);
        setResult(jsonData.result);
    }
    
    return (
        <div style={{width:"50%", margin: "auto"}}>
            <h1>GET :: Product List - {result}</h1>
            <ul style={{display: "flex", gap: "10px", listStyle: "none"}}>
                {list?.map( item => 
                    <li key={item.pid}>
                        <img src={item.img} style={{width: "150px"}} onClick={ () => handleProductDetail(item) }/>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </li>
                )}
            </ul>
        </div>
    );
}

