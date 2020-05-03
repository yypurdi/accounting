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
    Title:'AppProductAcctCodeSearch',
    Heading:'AppProductAcctCode',
    ProductAcctCodeAndCogsId:{label :'ProductAcctCodeAndCogsId'},
    IsInventory:{label :'IsInventory'},
    IsPurchased:{label :'IsPurchased'},
    IsSold:{label :'IsSold'},
    AcctCodeCogs:{label :'AcctCodeCogs'},
    AcctCodeSales:{label :'AcctCodeSales'},
    AcctCodeSalesReturn:{label :'AcctCodeSalesReturn'},
    AcctCodeInventory:{label :'AcctCodeInventory'},
    AcctCodeConsignment:{label :'AcctCodeConsignment'},
    ProductId:{label :'ProductId'},
    AppProductAcctCode:{Heading:'AppProductAcctCode',
        ProductAcctCodeAndCogsId:{header:'ProductAcctCodeAndCogsId'},
        IsInventory:{header:'IsInventory'},
        IsPurchased:{header:'IsPurchased'},
        IsSold:{header:'IsSold'},
        AcctCodeCogs:{header:'AcctCodeCogs'},
        AcctCodeSales:{header:'AcctCodeSales'},
        AcctCodeSalesReturn:{header:'AcctCodeSalesReturn'},
        AcctCodeInventory:{header:'AcctCodeInventory'},
        AcctCodeConsignment:{header:'AcctCodeConsignment'},
        ProductId:{header:'ProductId'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppProductAcctCode?'+req._parsedUrl.query;
    dao.searchAppProductAcctCode(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppProductAcctCodeSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;