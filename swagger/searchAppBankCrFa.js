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
 * /searchAppBankCrFa:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchAppBankCrFa
 *     summary: AppBankCrFaSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: bankCashReceiveDetailId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: bankCashReceiveId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: accountNo
 *         description: String
 *         in: query
 *         type: String
 *       - name: departmentId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: amount
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: jobOrderNo
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
    dao.searchAppBankCrFa(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.appBankCrFa = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
