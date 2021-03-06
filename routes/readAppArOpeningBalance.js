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
    Title:'AppArOpeningBalanceRead',
    Heading:'AppArOpeningBalance',
    ArOpeningBalanceId:{label :'ArOpeningBalanceId'},
    CustomerId:{label :'CustomerId'},
    Date:{label :'Date'},
    InvoiceNo:{label :'InvoiceNo'},
    PurchaseOrderNo:{label :'PurchaseOrderNo'},
    CurrencyId:{label :'CurrencyId'},
    ReceivableValue:{label :'ReceivableValue'},
    TermOfPaymentId:{label :'TermOfPaymentId'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    req.session.previouspath = 'readAppArOpeningBalance?'+req._parsedUrl.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    var readAppArOpeningBalance = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.readAppArOpeningBalance(jsonObj,function(err,rows) {
                if(err) res.status(err.code).end();
                else{
                    if(rows[0]===undefined) res.redirect('/searchAppArOpeningBalance');
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
        res.render('AppArOpeningBalanceReadPage',parameter);
    }    
    Promise.all([readAppArOpeningBalance]).then(sendResult);
});

module.exports = router;
