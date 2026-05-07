// 1. express 라이브러리, 미들웨어 import
// const express = require('express');     // type = commonjs 일때
import express from 'express';
import cors from 'cors';
import apiRouter from './routes/api.js';
import usersRouter from './routes/users.js'

// 2. express 객체 생성
const PORT = 9000;          // 포트번호 지정
const app = express();

// 3. 미들웨어 추가
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

//4 . 라우팅 
app.use('/api', apiRouter);
app.use('/users', usersRouter);

// 5. 서버 시작
app.listen(PORT, () => {
    console.log(`서버 실행 ==>> ${PORT}`);
});