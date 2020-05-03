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
 * /searchAppRptTrialBalance:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchAppRptTrialBalance
 *     summary: AppRptTrialBalanceSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: rptTrialBalanceId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: rptTrialBalanceName
 *         description: String
 *         in: query
 *         type: String
 *       - name: departmentFrom
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: departmentTo
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: currencyId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: accountNo
 *         description: String
 *         in: query
 *         type: String
 *       - name: endingBalanceDebit
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: endingBalanceCredit
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: dateCreated
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: createdBy
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
    dao.searchAppRptTrialBalance(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.appRptTrialBalance = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;