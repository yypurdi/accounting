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
    Title:'AppTaxSearch',
    Heading:'AppTax',
    TaxId:{label :'TaxId'},
    TaxCode:{label :'TaxCode'},
    Tax:{label :'Tax'},
    Percentage:{label :'Percentage'},
    IsCogsDeductible:{label :'IsCogsDeductible'},
    AcctCodePurchaseTax:{label :'AcctCodePurchaseTax'},
    AcctCodeSales:{label :'AcctCodeSales'},
    Details:{label :'Details'},
    AppTax:{Heading:'AppTax',
        TaxId:{header:'TaxId'},
        TaxCode:{header:'TaxCode'},
        Tax:{header:'Tax'},
        Percentage:{header:'Percentage'},
        IsCogsDeductible:{header:'IsCogsDeductible'},
        AcctCodePurchaseTax:{header:'AcctCodePurchaseTax'},
        AcctCodeSales:{header:'AcctCodeSales'},
        Details:{header:'Details'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppTax?'+req._parsedUrl.query;
    dao.searchAppTax(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppTaxSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;
