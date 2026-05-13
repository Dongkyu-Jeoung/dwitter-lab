import * as repository from '../repository/header.js';


export const getHeader = async(req, res) => {
    const header = await repository.getHeader();
    res.json({"result": header});
}