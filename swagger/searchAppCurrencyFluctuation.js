/*
 * script route generated by KOMA
 * @author : Yan Yan Purdiansah
 */    
var express = require('express');
var router = express.Router();
var database = require('./dao');
var dao = new database.Dao();
        
/**
 * @swagger
 * /searchAppCurrencyFluctuation:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchAppCurrencyFluctuation
 *     summary: AppCurrencyFluctuationSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: currencyFluctuationId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: currencyId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: byDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: exchangeRate
 *         description: Double
 *         in: query
 *         type: Double
 *     responses:
 *       '200':
 *         description: OK
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Not Found 
 *       '500':
 *         description: Internal Server Problem
 */    

router.get('/', function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    dao.searchAppCurrencyFluctuation(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.appCurrencyFluctuation = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;