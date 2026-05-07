import React from 'react';
import { Title, SubTitle } from '../components/commons/Titles.jsx';
import Categories from '../components/content/Categories.jsx';
import Projects from '../components/content/Projects.jsx';
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFetchData } from "../util/fetch.js";

export default function Work() {
    // const { data }  = useOutletContext();
    const [data, setData] = useState({});
    useEffect(() => {
            const fetchData = async () => {
                const jsonData = await getFetchData('/content/work');
                setData(jsonData?.result);
            }
            fetchData();
        }, []);

    return (
        <section id="work" className="section container">
            <Title title="My Work" />
            <SubTitle subTitle="Projects" />
            <Categories categories={data?.categories} />
            <Projects   projects={data?.projects}  />
        </section>
    );
}


