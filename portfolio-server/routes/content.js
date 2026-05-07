import express from 'express';
import * as controller from '../controller/content.js';

const router = express.Router(); 

router.get('/home', controller.getContentHome);
router.get('/about', controller.getContentAbout);
router.get('/skills', controller.getContentSkills);
router.get('/work', controller.getContentWork);
router.get('/testimonial', controller.getContentTestimonial);




export default router;