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
    Title:'AppArOpeningBalanceSearch',
    Heading:'AppArOpeningBalance',
    ArOpeningBalanceId:{label :'ArOpeningBalanceId'},
    CustomerId:{label :'CustomerId'},
    Date:{label :'Date'},
    InvoiceNo:{label :'InvoiceNo'},
    PurchaseOrderNo:{label :'PurchaseOrderNo'},
    CurrencyId:{label :'CurrencyId'},
    ReceivableValue:{label :'ReceivableValue'},
    TermOfPaymentId:{label :'TermOfPaymentId'},
    AppArOpeningBalance:{Heading:'AppArOpeningBalance',
        ArOpeningBalanceId:{header:'ArOpeningBalanceId'},
        CustomerId:{header:'CustomerId'},
        Date:{header:'Date'},
        InvoiceNo:{header:'InvoiceNo'},
        PurchaseOrderNo:{header:'PurchaseOrderNo'},
        CurrencyId:{header:'CurrencyId'},
        ReceivableValue:{header:'ReceivableValue'},
        TermOfPaymentId:{header:'TermOfPaymentId'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppArOpeningBalance?'+req._parsedUrl.query;
    dao.searchAppArOpeningBalance(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppArOpeningBalanceSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;
