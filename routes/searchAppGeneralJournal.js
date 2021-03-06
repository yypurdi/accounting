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
    Title:'AppGeneralJournalSearch',
    Heading:'AppGeneralJournal',
    GeneralJournalId:{label :'GeneralJournalId'},
    Reference:{label :'Reference'},
    Date:{label :'Date'},
    Note:{label :'Note'},
    CreatedDate:{label :'CreatedDate'},
    AppGeneralJournal:{Heading:'AppGeneralJournal',
        GeneralJournalId:{header:'GeneralJournalId'},
        Reference:{header:'Reference'},
        Date:{header:'Date'},
        Note:{header:'Note'},
        CreatedDate:{header:'CreatedDate'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppGeneralJournal?'+req._parsedUrl.query;
    dao.searchAppGeneralJournal(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppGeneralJournalSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;
