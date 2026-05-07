import * as repository from '../repository/usersRepository.js';


export const login = (req, res) => {
    const { id, pwd } = req.body.data;
    const result = repository.login(id, pwd);
    res.json({"result": result});
}

export const getusers = (req, res) => {
    const users = repository.getusers();
    res.json({"users": users});
}