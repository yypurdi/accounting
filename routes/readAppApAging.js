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
    Title:'AppApAgingRead',
    Heading:'AppApAging',
    ApAgingId:{label :'ApAgingId'},
    VendorId:{label :'VendorId'},
    ReferenceNo:{label :'ReferenceNo'},
    Debit:{label :'Debit'},
    Credit:{label :'Credit'},
    ApDueDate:{label :'ApDueDate'},
    CurrentDate:{label :'CurrentDate'},
    Age:{label :'Age'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    req.session.previouspath = 'readAppApAging?'+req._parsedUrl.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    var readAppApAging = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.readAppApAging(jsonObj,function(err,rows) {
                if(err) res.status(err.code).end();
                else{
                    if(rows[0]===undefined) res.redirect('/searchAppApAging');
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
        res.render('AppApAgingReadPage',parameter);
    }    
    Promise.all([readAppApAging]).then(sendResult);
});

module.exports = router;
