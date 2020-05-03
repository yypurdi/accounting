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
    Title:'AppBudgetInfoRead',
    Heading:'AppBudgetInfo',
    BudgetInfoId:{label :'BudgetInfoId'},
    Year:{label :'Year'},
    Month:{label :'Month'},
    Budget:{label :'Budget'},
    Realization:{label :'Realization'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    req.session.previouspath = 'readAppBudgetInfo?'+req._parsedUrl.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    var readAppBudgetInfo = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.readAppBudgetInfo(jsonObj,function(err,rows) {
                if(err) res.status(err.code).end();
                else{
                    if(rows[0]===undefined) res.redirect('/searchAppBudgetInfo');
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
        res.render('AppBudgetInfoReadPage',parameter);
    }    
    Promise.all([readAppBudgetInfo]).then(sendResult);
});

module.exports = router;