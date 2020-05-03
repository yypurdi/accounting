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
    Title:'AppArWriteoffVerificationWrite',
    Heading:'AppArWriteoffVerification',
    WriteOffVerificationId:{label :'WriteOffVerificationId'},
    Ref:{label :'Ref'},
    Date:{label :'Date'},
    Amount:{label :'Amount'},
    Note:{label :'Note'},
    AcccountNo:{label :'AcccountNo'},
    AllowanceAccountNo:{label :'AllowanceAccountNo'},
    ReferenceNoTobeWriteoff:{label :'ReferenceNoTobeWriteoff'},
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
    dao.readAppArWriteoffVerification(jsonObj,function(err,rows) {
        parameter.record = rows[0];
        res.render('AppArWriteoffVerificationWritePage',parameter);
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
    dao.writeAppArWriteoffVerification(jsonObj,function(err,rows) {    
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('AppArWriteoffVerificationWritePage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;
