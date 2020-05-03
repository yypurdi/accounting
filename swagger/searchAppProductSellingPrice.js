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
 * /searchAppProductSellingPrice:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchAppProductSellingPrice
 *     summary: AppProductSellingPriceSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: productPriceId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: changedDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: changedBy
 *         description: String
 *         in: query
 *         type: String
 *       - name: normalPriceEffectiveDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: calculationMethod
 *         description: String
 *         in: query
 *         type: String
 *       - name: amountOfCalculationMethod
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: roundUp
 *         description: String
 *         in: query
 *         type: String
 *       - name: smallestUnit
 *         description: String
 *         in: query
 *         type: String
 *       - name: pricingBase
 *         description: String
 *         in: query
 *         type: String
 *       - name: isIncludeTaxToSellingPrice
 *         description: String
 *         in: query
 *         type: String
 *       - name: isSelectedItem
 *         description: String
 *         in: query
 *         type: String
 *       - name: currentSellingPrice
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: newSellingPrice
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: effectiveDateOfNewSellingPrice
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: productId
 *         description: Long
 *         in: query
 *         type: Long
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
    dao.searchAppProductSellingPrice(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.appProductSellingPrice = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
