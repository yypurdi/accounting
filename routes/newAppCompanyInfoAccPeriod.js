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
    Title:'AppCompanyInfoAccPeriodNew',
    Heading:'AppCompanyInfoAccPeriod',
    AccountingPeriodId:{label :'AccountingPeriodId'},
    Month:{label :'Month'},
    Year:{label :'Year'},
    YearEnd:{label :'YearEnd'},
    IsCreateChartOfAccount:{label :'IsCreateChartOfAccount'},
    FileName:{label :'FileName'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
        statusCode:100,
        statusMessage:'',        
        record:{accountingPeriodId:'',
        month:'',
        year:'',
        yearEnd:'',
        isCreateChartOfAccount:'',
        fileName:'',
        }
    }
    res.render('AppCompanyInfoAccPeriodNewPage',parameter);
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
    dao.newAppCompanyInfoAccPeriod(jsonObj,function(err,rows) {
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('AppCompanyInfoAccPeriodNewPage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;
