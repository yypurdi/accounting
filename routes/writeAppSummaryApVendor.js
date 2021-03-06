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
    Title:'AppSummaryApVendorWrite',
    Heading:'AppSummaryApVendor',
    SummaryApVendorId:{label :'SummaryApVendorId'},
    VendorId:{label :'VendorId'},
    Date:{label :'Date'},
    BeginningBalanceDebit:{label :'BeginningBalanceDebit'},
    BeginningBalanceCredit:{label :'BeginningBalanceCredit'},
    DebitMutation:{label :'DebitMutation'},
    CreditMutation:{label :'CreditMutation'},
    EndingBalanceDebit:{label :'EndingBalanceDebit'},
    EndingBalanceCredit:{label :'EndingBalanceCredit'},
    BeginningBalance:{label :'BeginningBalance'},
    DeltaFromBegToEnd:{label :'DeltaFromBegToEnd'},
    EndingBalance:{label :'EndingBalance'},
    Paid:{label :'Paid'},
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
    dao.readAppSummaryApVendor(jsonObj,function(err,rows) {
        parameter.record = rows[0];
        res.render('AppSummaryApVendorWritePage',parameter);
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
    dao.writeAppSummaryApVendor(jsonObj,function(err,rows) {    
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('AppSummaryApVendorWritePage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;
