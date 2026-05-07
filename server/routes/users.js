import express from 'express';
import * as controller from '../controller/usersController.js'

const router = express.Router();



router.post("/login", controller.login);
router.get("/", controller.getusers);

export default router;