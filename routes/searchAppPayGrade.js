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
    Title:'AppPayGradeSearch',
    Heading:'AppPayGrade',
    PayGradeId:{label :'PayGradeId'},
    PayGradeName:{label :'PayGradeName'},
    MinSalary:{label :'MinSalary'},
    MaxSalary:{label :'MaxSalary'},
    Currency:{label :'Currency'},
    AppPayGrade:{Heading:'AppPayGrade',
        PayGradeId:{header:'PayGradeId'},
        PayGradeName:{header:'PayGradeName'},
        MinSalary:{header:'MinSalary'},
        MaxSalary:{header:'MaxSalary'},
        Currency:{header:'Currency'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppPayGrade?'+req._parsedUrl.query;
    dao.searchAppPayGrade(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppPayGradeSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;
