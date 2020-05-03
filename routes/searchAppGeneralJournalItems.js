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
    Title:'AppGeneralJournalItemsSearch',
    Heading:'AppGeneralJournalItems',
    GeneralJournalId:{label :'GeneralJournalId'},
    AccountNo:{label :'AccountNo'},
    DebitAmount:{label :'DebitAmount'},
    CreditAmount:{label :'CreditAmount'},
    JobOrderNo:{label :'JobOrderNo'},
    AppGeneralJournalItems:{Heading:'AppGeneralJournalItems',
        GeneralJournalId:{header:'GeneralJournalId'},
        AccountNo:{header:'AccountNo'},
        DebitAmount:{header:'DebitAmount'},
        CreditAmount:{header:'CreditAmount'},
        JobOrderNo:{header:'JobOrderNo'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppGeneralJournalItems?'+req._parsedUrl.query;
    dao.searchAppGeneralJournalItems(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppGeneralJournalItemsSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;