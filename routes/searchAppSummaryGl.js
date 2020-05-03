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
    Title:'AppSummaryGlSearch',
    Heading:'AppSummaryGl',
    GeneralLedgerId:{label :'GeneralLedgerId'},
    AccountNo:{label :'AccountNo'},
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
    AppSummaryGl:{Heading:'AppSummaryGl',
        GeneralLedgerId:{header:'GeneralLedgerId'},
        AccountNo:{header:'AccountNo'},
        Date:{header:'Date'},
        BeginningBalanceDebit:{header:'BeginningBalanceDebit'},
        BeginningBalanceCredit:{header:'BeginningBalanceCredit'},
        DebitMutation:{header:'DebitMutation'},
        CreditMutation:{header:'CreditMutation'},
        EndingBalanceDebit:{header:'EndingBalanceDebit'},
        EndingBalanceCredit:{header:'EndingBalanceCredit'},
        BeginningBalance:{header:'BeginningBalance'},
        DeltaFromBegToEnd:{header:'DeltaFromBegToEnd'},
        EndingBalance:{header:'EndingBalance'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppSummaryGl?'+req._parsedUrl.query;
    dao.searchAppSummaryGl(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppSummaryGlSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;