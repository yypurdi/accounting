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
    Title:'AppApOpeningBalanceSearch',
    Heading:'AppApOpeningBalance',
    ApOpeningBalanceId:{label :'ApOpeningBalanceId'},
    VendorId:{label :'VendorId'},
    Date:{label :'Date'},
    InvoiceNo:{label :'InvoiceNo'},
    PurchaseOrderNo:{label :'PurchaseOrderNo'},
    CurrencyId:{label :'CurrencyId'},
    PayableValue:{label :'PayableValue'},
    TermOfPaymentId:{label :'TermOfPaymentId'},
    AppApOpeningBalance:{Heading:'AppApOpeningBalance',
        ApOpeningBalanceId:{header:'ApOpeningBalanceId'},
        VendorId:{header:'VendorId'},
        Date:{header:'Date'},
        InvoiceNo:{header:'InvoiceNo'},
        PurchaseOrderNo:{header:'PurchaseOrderNo'},
        CurrencyId:{header:'CurrencyId'},
        PayableValue:{header:'PayableValue'},
        TermOfPaymentId:{header:'TermOfPaymentId'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppApOpeningBalance?'+req._parsedUrl.query;
    dao.searchAppApOpeningBalance(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppApOpeningBalanceSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;
