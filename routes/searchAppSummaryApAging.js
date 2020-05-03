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
    Title:'AppSummaryApAgingSearch',
    Heading:'AppSummaryApAging',
    ApAgingId:{label :'ApAgingId'},
    VendorId:{label :'VendorId'},
    CurrentDate:{label :'CurrentDate'},
    Day030:{label :'Day030'},
    Day3060:{label :'Day3060'},
    Day6090:{label :'Day6090'},
    DayMoreThan90:{label :'DayMoreThan90'},
    AppSummaryApAging:{Heading:'AppSummaryApAging',
        ApAgingId:{header:'ApAgingId'},
        VendorId:{header:'VendorId'},
        CurrentDate:{header:'CurrentDate'},
        Day030:{header:'Day030'},
        Day3060:{header:'Day3060'},
        Day6090:{header:'Day6090'},
        DayMoreThan90:{header:'DayMoreThan90'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppSummaryApAging?'+req._parsedUrl.query;
    dao.searchAppSummaryApAging(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppSummaryApAgingSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;
