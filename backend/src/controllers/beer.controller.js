const BeersModel = require('../models/beers.model');
const currencyService = require('../services/currency')

const getBeers = async function(req, res){
    
    let [error, result] = await BeersModel.getAll(req.params);

    if(error) return res.send(error.message, 400);

    if(req.params.beerID && !result.length) return res.send('El ID de la cerveza no existe', 404);
    
    return res.json(req.params.beerID? result[0]: result);
}
module.exports.getBeers = getBeers;

const boxprice = async function(req, res){
    
    let [error, result] = await BeersModel.getAll(req.params);
    if(error) return res.send(error.message, 400);
    if(!result.length) return res.send('El ID de la cerveza no existe', 404);
    let beer = result[0];
    if(req.query.currency){
        let currency = (req.query.currency).toUpperCase();
        let validateCurrency = currencyService.currencyList[currency];
        if(!validateCurrency) return res.send("No existe la moneda en que desea pagar, para información acerca de las monedas disponibles ejecute el servicio '{{base-url}}/currencies'", 404);
        beer = {};
        [error, beer['Price Total']] = currencyService.convertFromTo( result[0]['Currency'], currency, (req.query.quantity || 6), result[0]['Price']);
    }
    if(error) return res.sned(error, 400);
    return res.json(beer);
}
module.exports.boxprice = boxprice;

const addBeer = async function(req, res){
    let body = req.body;
    
    let validateCurrency = currencyService.currencyList[body.Currency.toUpperCase()];
    
    if(!validateCurrency) return res.json("No existe la moneda que agregó al campo currency, para información acerca de las monedas disponibles ejecute el servicio '{{base-url}}/currencies'", 404);

    let [error, result] = await BeersModel.insert(body);

    if(error) {
        if(error.code == 'ER_DUP_ENTRY') return res.send('El ID de la cerveza ya existe', 409);
        return res.send(error.message, 400);
    };

    return res.send("Cerveza creada", 201);
}
module.exports.addBeer = addBeer;