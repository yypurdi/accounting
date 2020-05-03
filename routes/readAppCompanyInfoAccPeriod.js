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
    Title:'AppCompanyInfoAccPeriodRead',
    Heading:'AppCompanyInfoAccPeriod',
    AccountingPeriodId:{label :'AccountingPeriodId'},
    Month:{label :'Month'},
    Year:{label :'Year'},
    YearEnd:{label :'YearEnd'},
    IsCreateChartOfAccount:{label :'IsCreateChartOfAccount'},
    FileName:{label :'FileName'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    req.session.previouspath = 'readAppCompanyInfoAccPeriod?'+req._parsedUrl.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    var readAppCompanyInfoAccPeriod = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.readAppCompanyInfoAccPeriod(jsonObj,function(err,rows) {
                if(err) res.status(err.code).end();
                else{
                    if(rows[0]===undefined) res.redirect('/searchAppCompanyInfoAccPeriod');
                    else{ 
                        jsonObj = rows[0];
                        resolve(jsonObj);
                    }
                }
            });
        },1000);
    });
    
    var sendResult = (results) => {
        console.log(jsonObj)
        parameter.record = jsonObj;        
        res.render('AppCompanyInfoAccPeriodReadPage',parameter);
    }    
    Promise.all([readAppCompanyInfoAccPeriod]).then(sendResult);
});

module.exports = router;
