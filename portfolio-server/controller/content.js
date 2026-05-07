import * as repository from '../repository/content.js';

const content = repository.getContent();

export const getContentHome = (req, res) => {
    res.json({"result": content.home});
}

export const getContentAbout = (req, res) => {
    res.json({"result": content.about});
}

export const getContentSkills = (req, res) => {
    res.json({"result": content.skills});
}

export const getContentWork = (req, res) => {
    res.json({"result": content.work});
}

export const getContentTestimonial = (req, res) => {
    res.json({"result": content.testimonials});
}
