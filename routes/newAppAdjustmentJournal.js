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
    Title:'AppAdjustmentJournalNew',
    Heading:'AppAdjustmentJournal',
    AdjustmentJournalId:{label :'AdjustmentJournalId'},
    AccountNo:{label :'AccountNo'},
    Date:{label :'Date'},
    ReferenceNo:{label :'ReferenceNo'},
    InOrDebit:{label :'InOrDebit'},
    OutOrCredit:{label :'OutOrCredit'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
        statusCode:100,
        statusMessage:'',        
        record:{adjustmentJournalId:'',
        accountNo:'',
        date:'',
        referenceNo:'',
        inOrDebit:'',
        outOrCredit:'',
        }
    }
    res.render('AppAdjustmentJournalNewPage',parameter);
    console.log(parameter);
});
router.post('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.body;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }    
    dao.newAppAdjustmentJournal(jsonObj,function(err,rows) {
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('AppAdjustmentJournalNewPage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;
