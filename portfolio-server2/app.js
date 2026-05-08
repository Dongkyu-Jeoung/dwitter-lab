//1. 라이브러리 임포트
import express from 'express';
import cors from 'cors';

//2. 익스프레스 서버 객체 생성
const PORT = 9000;
const app = express();

//3. 미들웨어
app.use(cors());   //모든 origin(프론트) 허용
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//4. 라우팅
app.get('/', (req, res, next)=>{
    res.send('response -> server.js');
});


//5. 익스프레스 서버 객체 실행
app.listen(PORT, () => {
    console.log(`서버 실행 --->> ${PORT}`);
});