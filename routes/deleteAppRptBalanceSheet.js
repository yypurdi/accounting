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
    Title:'AppRptBalanceSheetDelete',
    Heading:'AppRptBalanceSheet',
    RptBalanceSheetId:{label :'RptBalanceSheetId'},
    RptBalanceSheetName:{label :'RptBalanceSheetName'},
    DepartmentFrom:{label :'DepartmentFrom'},
    DepartmentTo:{label :'DepartmentTo'},
    CurrencyId:{label :'CurrencyId'},
    AccountClassId:{label :'AccountClassId'},
    AccountSubClassId:{label :'AccountSubClassId'},
    AccountNo:{label :'AccountNo'},
    EndingBalanceDebit:{label :'EndingBalanceDebit'},
    EndingBalanceCredit:{label :'EndingBalanceCredit'},
    ComparativeEndingBalanceDebit:{label :'ComparativeEndingBalanceDebit'},
    ComparativeEndingBalanceCredit:{label :'ComparativeEndingBalanceCredit'},
    DateCreated:{label :'DateCreated'},
    CreatedBy:{label :'CreatedBy'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    dao.deleteAppRptBalanceSheet(jsonObj,function(err,rows) {
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        res.redirect(req.session.previouspath);
        console.log(parameter);        
    });
});

module.exports = router;