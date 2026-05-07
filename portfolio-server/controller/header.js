import * as repository from '../repository/header.js';


export const getHeader = (req, res) => {
    const header = repository.getHeader();
    res.json({"result": header});
}