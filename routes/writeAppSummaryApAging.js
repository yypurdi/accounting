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
    Title:'AppSummaryApAgingWrite',
    Heading:'AppSummaryApAging',
    ApAgingId:{label :'ApAgingId'},
    VendorId:{label :'VendorId'},
    CurrentDate:{label :'CurrentDate'},
    Day030:{label :'Day030'},
    Day3060:{label :'Day3060'},
    Day6090:{label :'Day6090'},
    DayMoreThan90:{label :'DayMoreThan90'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
        statusCode:100,
        statusMessage:'',
    }
    dao.readAppSummaryApAging(jsonObj,function(err,rows) {
        parameter.record = rows[0];
        res.render('AppSummaryApAgingWritePage',parameter);
        console.log(parameter);        
    });
});
router.post('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.body;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,        
    }
    dao.writeAppSummaryApAging(jsonObj,function(err,rows) {    
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('AppSummaryApAgingWritePage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;
