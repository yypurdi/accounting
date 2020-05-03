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
    Title:'AppBankCashReceiveSearch',
    Heading:'AppBankCashReceive',
    BankCashReceiveId:{label :'BankCashReceiveId'},
    AccountNo:{label :'AccountNo'},
    IsPostDatedCheck:{label :'IsPostDatedCheck'},
    From:{label :'From'},
    Date:{label :'Date'},
    ReferenceNo:{label :'ReferenceNo'},
    Amount:{label :'Amount'},
    Memo:{label :'Memo'},
    AppBankCashReceive:{Heading:'AppBankCashReceive',
        BankCashReceiveId:{header:'BankCashReceiveId'},
        AccountNo:{header:'AccountNo'},
        IsPostDatedCheck:{header:'IsPostDatedCheck'},
        From:{header:'From'},
        Date:{header:'Date'},
        ReferenceNo:{header:'ReferenceNo'},
        Amount:{header:'Amount'},
        Memo:{header:'Memo'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppBankCashReceive?'+req._parsedUrl.query;
    dao.searchAppBankCashReceive(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppBankCashReceiveSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;