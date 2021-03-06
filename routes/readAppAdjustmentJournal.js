/*
 * script route generated by KOMA
 * @author : Yan Yan Purdiansah
 */    
var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');    
var database = require('./dao');
var dao = new database.Dao();    
var sessionChecker = require('./security');
var appresource = {
    Title:'AppAdjustmentJournalRead',
    Heading:'AppAdjustmentJournal',
    AdjustmentJournalId:{label :'AdjustmentJournalId'},
    AccountNo:{label :'AccountNo'},
    Date:{label :'Date'},
    ReferenceNo:{label :'ReferenceNo'},
    InOrDebit:{label :'InOrDebit'},
    OutOrCredit:{label :'OutOrCredit'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    req.session.previouspath = 'readAppAdjustmentJournal?'+req._parsedUrl.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    var readAppAdjustmentJournal = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.readAppAdjustmentJournal(jsonObj,function(err,rows) {
                if(err) res.status(err.code).end();
                else{
                    if(rows[0]===undefined) res.redirect('/searchAppAdjustmentJournal');
                    else{ 
                        jsonObj = rows[0];
                        resolve(jsonObj);
                    }
                }
            });
        },1000);
    });
    
    var sendResult = (results) => {
        console.log(jsonObj)
        parameter.record = jsonObj;        
        res.render('AppAdjustmentJournalReadPage',parameter);
    }    
    Promise.all([readAppAdjustmentJournal]).then(sendResult);
});

module.exports = router;
