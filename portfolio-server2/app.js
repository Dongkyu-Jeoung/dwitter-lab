//1. 라이브러리 임포트
import express from 'express';
import cors from 'cors';
import db from './db/connection.js';

//2. 익스프레스 서버 객체 생성
const PORT = 9000;
const app = express();

//3. 미들웨어
app.use(cors());   //모든 origin(프론트) 허용
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//4. 라우팅
app.get('/header', async (req, res) => {
    const sql = `select header from portfolio`;
    const [results, fields] = await db.execute(sql,[]);
    const header = results[0].header;
    
    res.json({"result" : header});
});

app.get('/footer', async(req, res) => {
    const sql = `select footer from portfolio`;
    const [results, fields] = await db.execute(sql,[]);
    const footer = results[0].footer;

    res.json({"result" : footer});
});

app.get('/content/home', async(req, res) => {
    const sql = `select home from portfolio`;
    const [results, fields] = await db.execute(sql,[]);
    const home = results[0].home

    res.json({"result" : home});
});

app.get('/content/about', async(req, res) => {
    const sql = `select about from portfolio`;
    const [results, fields] = await db.execute(sql,[]);
    const about = results[0].about

    res.json({"result" : about});
});

app.get('/content/skills', async(req, res) => {
    const sql = `select skills from portfolio`;
    const [results, fields] = await db.execute(sql,[]);
    const skills = results[0].skills

    res.json({"result" : skills});
});

app.get('/content/work', async(req, res) => {
    const sql = `select work from portfolio`;
    const [results, fields] = await db.execute(sql,[]);
    const work = results[0].work

    res.json({"result" : work});
});

app.get('/content/testimonial', async(req, res) => {
    const sql = `select testimonials from portfolio`;
    const [results, fields] = await db.execute(sql,[]);
    const testimonials = results[0].testimonials

    res.json({"result" : testimonials});
});

app.get('/content/work/project/:pid', async(req, res) => {
    const pid = req.params.pid;
    const sql = `select work from portfolio`;
    const results = await db.execute(sql,[]);
    const projects = results[0][0].work.projects;

    res.json({"result" : projects.find(project => project.pid === pid)});
})

//5. 익스프레스 서버 객체 실행
app.listen(PORT, () => {
    console.log(`서버 실행 --->> ${PORT}`);
});