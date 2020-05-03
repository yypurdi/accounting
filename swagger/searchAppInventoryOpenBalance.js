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
 * /searchAppInventoryOpenBalance:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchAppInventoryOpenBalance
 *     summary: AppInventoryOpenBalanceSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: inventoryOpeningBalanceId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: locationMaster
 *         description: String
 *         in: query
 *         type: String
 *       - name: productId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: beginningBalance
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: unitCost
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: isSerialNumber
 *         description: String
 *         in: query
 *         type: String
 *       - name: isLotNumber
 *         description: String
 *         in: query
 *         type: String
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
    dao.searchAppInventoryOpenBalance(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.appInventoryOpenBalance = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
