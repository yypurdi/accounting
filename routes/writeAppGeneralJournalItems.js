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
    Title:'AppGeneralJournalItemsWrite',
    Heading:'AppGeneralJournalItems',
    GeneralJournalId:{label :'GeneralJournalId'},
    AccountNo:{label :'AccountNo'},
    DebitAmount:{label :'DebitAmount'},
    CreditAmount:{label :'CreditAmount'},
    JobOrderNo:{label :'JobOrderNo'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
        statusCode:100,
        statusMessage:'',
    }
    dao.readAppGeneralJournalItems(jsonObj,function(err,rows) {
        parameter.record = rows[0];
        res.render('AppGeneralJournalItemsWritePage',parameter);
        console.log(parameter);        
    });
});
router.post('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.body;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,        
    }
    dao.writeAppGeneralJournalItems(jsonObj,function(err,rows) {    
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('AppGeneralJournalItemsWritePage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;
