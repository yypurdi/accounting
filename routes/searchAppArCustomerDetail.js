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
    Title:'AppArCustomerDetailSearch',
    Heading:'AppArCustomerDetail',
    ArCustomerDetailId:{label :'ArCustomerDetailId'},
    CustomerId:{label :'CustomerId'},
    Date:{label :'Date'},
    Note:{label :'Note'},
    Debit:{label :'Debit'},
    Credit:{label :'Credit'},
    DebitBalance:{label :'DebitBalance'},
    CreditBalance:{label :'CreditBalance'},
    Balance:{label :'Balance'},
    ReferenceNo:{label :'ReferenceNo'},
    ArDueDate:{label :'ArDueDate'},
    Status:{label :'Status'},
    AppArCustomerDetail:{Heading:'AppArCustomerDetail',
        ArCustomerDetailId:{header:'ArCustomerDetailId'},
        CustomerId:{header:'CustomerId'},
        Date:{header:'Date'},
        Note:{header:'Note'},
        Debit:{header:'Debit'},
        Credit:{header:'Credit'},
        DebitBalance:{header:'DebitBalance'},
        CreditBalance:{header:'CreditBalance'},
        Balance:{header:'Balance'},
        ReferenceNo:{header:'ReferenceNo'},
        ArDueDate:{header:'ArDueDate'},
        Status:{header:'Status'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppArCustomerDetail?'+req._parsedUrl.query;
    dao.searchAppArCustomerDetail(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppArCustomerDetailSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;
