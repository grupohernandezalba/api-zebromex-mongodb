import Menu from '../models/Menu.js';

const getMenus = (req, res) => {
    Menu.find().sort( { "int_orden_men": 1 } )
    .then(menus => {
        res.json(menus);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

export default { getMenus }; 