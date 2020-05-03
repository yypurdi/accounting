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
 * /searchAppApVendorDetail:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchAppApVendorDetail
 *     summary: AppApVendorDetailSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: apVendorDetailId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: vendorId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: date
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: note
 *         description: String
 *         in: query
 *         type: String
 *       - name: debit
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: credit
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: debitBalance
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: creditBalance
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: balance
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: referenceNo
 *         description: String
 *         in: query
 *         type: String
 *       - name: arDueDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: status
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
    dao.searchAppApVendorDetail(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.appApVendorDetail = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;