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
    Title:'AppApWriteoffVerificationSearch',
    Heading:'AppApWriteoffVerification',
    WriteOffVerificationId:{label :'WriteOffVerificationId'},
    Ref:{label :'Ref'},
    Date:{label :'Date'},
    Amount:{label :'Amount'},
    Note:{label :'Note'},
    AcccountNo:{label :'AcccountNo'},
    AllowanceAccountNo:{label :'AllowanceAccountNo'},
    ReferenceNoTobeWriteoff:{label :'ReferenceNoTobeWriteoff'},
    AppApWriteoffVerification:{Heading:'AppApWriteoffVerification',
        WriteOffVerificationId:{header:'WriteOffVerificationId'},
        Ref:{header:'Ref'},
        Date:{header:'Date'},
        Amount:{header:'Amount'},
        Note:{header:'Note'},
        AcccountNo:{header:'AcccountNo'},
        AllowanceAccountNo:{header:'AllowanceAccountNo'},
        ReferenceNoTobeWriteoff:{header:'ReferenceNoTobeWriteoff'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppApWriteoffVerification?'+req._parsedUrl.query;
    dao.searchAppApWriteoffVerification(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppApWriteoffVerificationSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;
