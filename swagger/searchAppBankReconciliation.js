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
 * /searchAppBankReconciliation:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchAppBankReconciliation
 *     summary: AppBankReconciliationSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: bankReconciliationId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: accountNo
 *         description: String
 *         in: query
 *         type: String
 *       - name: currentAccountDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: currentAccountBalance
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
    dao.searchAppBankReconciliation(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.appBankReconciliation = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
