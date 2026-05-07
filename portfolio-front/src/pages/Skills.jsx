import { Title, SubTitle, TitleDescription } from "../components/commons/Titles.jsx"
import SkillsContent from "../components/content/SkillsContent.jsx"
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getFetchData } from "../util/fetch.js";

export default function Skills() {
    // const { data } = useOutletContext();
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const jsonData = await getFetchData('/content/skills');
            setData(jsonData?.result);
        }
        fetchData();
    }, []);

    return (
        <section id="skills" className="section container">
            <Title title="My Skills" />
            <SubTitle subTitle="Skills & Attributes" />
            <TitleDescription titleDescription={data?.description} />
            <SkillsContent skills={data}/>
        </section>
    )
}