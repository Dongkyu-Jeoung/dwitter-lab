import * as repository from '../repository/apiRepository.js';


export const getFruits = (req, res, next) => {
    const fruits = repository.getFruits();
    res.json({"fruits" : fruits});
}

export const getProducts =  (req, res, next) => {
    const products = repository.getProducts();
    res.json({"products" : products});
}