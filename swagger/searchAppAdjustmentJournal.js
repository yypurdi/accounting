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
 * /searchAppAdjustmentJournal:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchAppAdjustmentJournal
 *     summary: AppAdjustmentJournalSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: adjustmentJournalId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: accountNo
 *         description: String
 *         in: query
 *         type: String
 *       - name: date
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: referenceNo
 *         description: String
 *         in: query
 *         type: String
 *       - name: inOrDebit
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: outOrCredit
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
    dao.searchAppAdjustmentJournal(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.appAdjustmentJournal = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
