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
    Title:'AppTermOfSalesNew',
    Heading:'AppTermOfSales',
    TermOfSalesId:{label :'TermOfSalesId'},
    TosCode:{label :'TosCode'},
    TosDesc:{label :'TosDesc'},
    DiscountDaysIndays:{label :'DiscountDaysIndays'},
    DueDateIndays:{label :'DueDateIndays'},
    EarlyDiscountInpercentage:{label :'EarlyDiscountInpercentage'},
    LateChargesInpercentage:{label :'LateChargesInpercentage'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
        statusCode:100,
        statusMessage:'',        
        record:{termOfSalesId:'',
        tosCode:'',
        tosDesc:'',
        discountDaysIndays:'',
        dueDateIndays:'',
        earlyDiscountInpercentage:'',
        lateChargesInpercentage:'',
        }
    }
    res.render('AppTermOfSalesNewPage',parameter);
    console.log(parameter);
});
router.post('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.body;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }    
    dao.newAppTermOfSales(jsonObj,function(err,rows) {
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('AppTermOfSalesNewPage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;
