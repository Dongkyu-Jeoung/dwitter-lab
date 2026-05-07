import * as repository from '../repository/footer.js';


export const getFooter = (req, res) => {
    const footer = repository.getFooter();
    res.json({"result": footer});
}
