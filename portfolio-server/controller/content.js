import * as repository from '../repository/content.js';

// const content = repository.getContent();



export const getContentHome = async(req, res) => {
    const home = await repository.getHome();
    res.json({"result": home});
}

export const getContentAbout = async(req, res) => {
    const about = await repository.getAbout();
    res.json({"result": about});
}

export const getContentSkills = async(req, res) => {
    const skills = await repository.getSkills();
    res.json({"result": skills});
}

export const getContentWork = async(req, res) => {
    const work = await repository.getWork();
    res.json({"result": work});
}

export const getContentTestimonial = async(req, res) => {
    const testimonials = await repository.getTestinomial();
    res.json({"result": testimonials});
}

export const getContentWorkProject = async(req, res, next) => {
    const pid = req.params.pid;
    const project = await repository.getProject(pid);
    console.log(project);
    
    res.json({"result": project});
}
