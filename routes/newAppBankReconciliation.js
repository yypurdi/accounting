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
    Title:'AppBankReconciliationNew',
    Heading:'AppBankReconciliation',
    BankReconciliationId:{label :'BankReconciliationId'},
    AccountNo:{label :'AccountNo'},
    CurrentAccountDate:{label :'CurrentAccountDate'},
    CurrentAccountBalance:{label :'CurrentAccountBalance'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
        statusCode:100,
        statusMessage:'',        
        record:{bankReconciliationId:'',
        accountNo:'',
        currentAccountDate:'',
        currentAccountBalance:'',
        }
    }
    res.render('AppBankReconciliationNewPage',parameter);
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
    dao.newAppBankReconciliation(jsonObj,function(err,rows) {
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('AppBankReconciliationNewPage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;