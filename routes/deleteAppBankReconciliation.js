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
    Title:'AppBankReconciliationDelete',
    Heading:'AppBankReconciliation',
    BankReconciliationId:{label :'BankReconciliationId'},
    AccountNo:{label :'AccountNo'},
    CurrentAccountDate:{label :'CurrentAccountDate'},
    CurrentAccountBalance:{label :'CurrentAccountBalance'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    dao.deleteAppBankReconciliation(jsonObj,function(err,rows) {
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
