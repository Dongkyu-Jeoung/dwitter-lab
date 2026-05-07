import React from 'react';
import { Title, SubTitle } from '../components/commons/Titles.jsx';
import Testimonial from '../components/content/Testimonial.jsx';
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFetchData } from "../util/fetch.js";

export default function Testimonials() {    
    // const { data } = useOutletContext();
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const jsonData = await getFetchData('/content/testimonial');
            setData(jsonData?.result);
        }
        fetchData();
    }, []);
    
    return (
        <section id="testimonial" className="section container">
            <Title title="Testimonial" />
            <SubTitle subTitle="See What they say about me" />
            <ul className="testimonials">
                {data?.map((item, idx)=>
                    <li className="testimonial" key={idx}>
                        <Testimonial item={item} />
                    </li>                                
                )}
            </ul>
        </section> 
    );
}

