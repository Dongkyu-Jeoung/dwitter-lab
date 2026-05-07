import { Title, Description } from "../components/commons/Titles.jsx"
import Majors from "../components/content/Majors.jsx";
import Jobs from "../components/content/Jobs.jsx";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getFetchData } from "../util/fetch.js";

export default function About() {
    // const { data } = useOutletContext();
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const jsonData = await getFetchData('/content/about');
            setData(jsonData?.result);
        }
        fetchData();
    }, []);

    return (
        <section id="about" className="section container">
            <Title title="About me" />
            <Description description={data?.description} />
            <Majors majors={data?.majors} />
            <Jobs jobs={data?.jobs}/>            
        </section>
    )
}