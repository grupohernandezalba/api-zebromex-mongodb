import Empresa from '../models/Empresa.js';

const getEmpresas = (req, res) => {
    Empresa.find()
    .then(empresa => {
        res.json(empresa);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

export default { getEmpresas }; 