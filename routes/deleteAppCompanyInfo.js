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
    Title:'AppCompanyInfoDelete',
    Heading:'AppCompanyInfo',
    CompanyInfoId:{label :'CompanyInfoId'},
    CompanyName:{label :'CompanyName'},
    AddressLine1:{label :'AddressLine1'},
    AddressLine2:{label :'AddressLine2'},
    CityId:{label :'CityId'},
    ProvinceId:{label :'ProvinceId'},
    CountryId:{label :'CountryId'},
    PostalCode:{label :'PostalCode'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    dao.deleteAppCompanyInfo(jsonObj,function(err,rows) {
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        res.redirect(req.session.previouspath);
        console.log(parameter);        
    });
});

module.exports = router;
