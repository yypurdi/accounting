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
    Title:'AppBankCrFaRead',
    Heading:'AppBankCrFa',
    BankCashReceiveDetailId:{label :'BankCashReceiveDetailId'},
    BankCashReceiveId:{label :'BankCashReceiveId'},
    AccountNo:{label :'AccountNo'},
    DepartmentId:{label :'DepartmentId'},
    Amount:{label :'Amount'},
    JobOrderNo:{label :'JobOrderNo'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    req.session.previouspath = 'readAppBankCrFa?'+req._parsedUrl.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    var readAppBankCrFa = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.readAppBankCrFa(jsonObj,function(err,rows) {
                if(err) res.status(err.code).end();
                else{
                    if(rows[0]===undefined) res.redirect('/searchAppBankCrFa');
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
        res.render('AppBankCrFaReadPage',parameter);
    }    
    Promise.all([readAppBankCrFa]).then(sendResult);
});

module.exports = router;
