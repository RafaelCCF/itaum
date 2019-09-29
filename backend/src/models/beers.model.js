var db = require('../../config/db')().then( pool => db = pool);


var self = module.exports = {
  name: 'Cadenas',

  getAll: async (params)=>{
    var query = `SELECT * FROM beers`;
    if(params.beerID) query = query + ` WHERE id = ${params.beerID}`;
    
    try {
      const [rows, fields] = await db.query(query)
      if(rows){
        return [null,rows]
      }
    } catch (error) {
      console.log(error);
      return [error , null]
    }
  },
  insert: async (body)=>{
    var query = `INSERT INTO beers (Id,Name,Brewery,Country,Price,Currency) VALUES (${body.Id},'${body.Name}','${body.Brewery}','${body.Country}',${body.Price},'${body.Currency.toUpperCase()}')`;
    try {
      const [rows, fields] = await db.query(query)
      if(rows){
        return [null,rows]
      }
    } catch (error) {
      console.log(error);
      return [error , null]
    }
  }
}