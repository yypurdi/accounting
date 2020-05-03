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
    Title:'AppCustomerTermOfSalesSearch',
    Heading:'AppCustomerTermOfSales',
    CustomerId:{label :'CustomerId'},
    TermOfSalesId:{label :'TermOfSalesId'},
    AppCustomerTermOfSales:{Heading:'AppCustomerTermOfSales',
        CustomerId:{header:'CustomerId'},
        TermOfSalesId:{header:'TermOfSalesId'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppCustomerTermOfSales?'+req._parsedUrl.query;
    dao.searchAppCustomerTermOfSales(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppCustomerTermOfSalesSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;
