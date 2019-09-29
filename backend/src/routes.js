const express 			= require('express');
const router 			= express.Router();

const BeerController = require('./controllers/beer.controller');
const CurrencyService = require('./services/currency')

router.get('/', (req, res) => res.send('API Beers!'));
router.get('/beers' , BeerController.getBeers);
router.get('/beers/:beerID/boxprice' , BeerController.boxprice);
router.get('/beers/:beerID' , BeerController.getBeers);
router.post('/beers' , BeerController.addBeer);
router.get('/currencies', (req,res)=> res.json({data:CurrencyService.currencyList}));
router.get('/from_usd_conversion', (req,res)=> res.json({description:"USD como moneda base", data:CurrencyService.currencyValues}));

module.exports = router;