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
 * /deleteAppAdjustmentJournal:
 *   delete:
 *     tags:
 *       - Administration
 *     description: deleteAppAdjustmentJournal
 *     summary: AppAdjustmentJournalDelete
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: adjustmentJournalId
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
    dao.deleteAppAdjustmentJournal(jsonObj,function(err,rows) {
        if(err) res.status(err.code).end();
        else {
            jsonObj.result = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
