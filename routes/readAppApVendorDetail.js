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
    Title:'AppApVendorDetailRead',
    Heading:'AppApVendorDetail',
    ApVendorDetailId:{label :'ApVendorDetailId'},
    VendorId:{label :'VendorId'},
    Date:{label :'Date'},
    Note:{label :'Note'},
    Debit:{label :'Debit'},
    Credit:{label :'Credit'},
    DebitBalance:{label :'DebitBalance'},
    CreditBalance:{label :'CreditBalance'},
    Balance:{label :'Balance'},
    ReferenceNo:{label :'ReferenceNo'},
    ArDueDate:{label :'ArDueDate'},
    Status:{label :'Status'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    req.session.previouspath = 'readAppApVendorDetail?'+req._parsedUrl.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    var readAppApVendorDetail = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.readAppApVendorDetail(jsonObj,function(err,rows) {
                if(err) res.status(err.code).end();
                else{
                    if(rows[0]===undefined) res.redirect('/searchAppApVendorDetail');
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
        res.render('AppApVendorDetailReadPage',parameter);
    }    
    Promise.all([readAppApVendorDetail]).then(sendResult);
});

module.exports = router;
