import express from 'express';
// import { getFruits, getProducts } from '../controller/apiController.js';
import * as controller from '../controller/apiController.js'

const router = express.Router();            // Router 생성자 함수


router.get("/get", controller.getFruits);
router.get("/products",controller.getProducts);

router.get("/products/:pid", (req, res) => {           
    res.json({"result" : `${req.params.pid}의 상세정보`})
});

// form 데이터 전송
router.post("/post", (req, res) => {
    console.log('form data ::', req.body.data);
    res.json({"result": true});
});

export default router;