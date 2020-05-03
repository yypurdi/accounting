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
    Title:'AppRefProvinceSearch',
    Heading:'AppRefProvince',
    ProvinceId:{label :'ProvinceId'},
    Name:{label :'Name'},
    Details:{label :'Details'},
    CountryId:{label :'CountryId'},
    AppRefProvince:{Heading:'AppRefProvince',
        ProvinceId:{header:'ProvinceId'},
        Name:{header:'Name'},
        Details:{header:'Details'},
        CountryId:{header:'CountryId'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppRefProvince?'+req._parsedUrl.query;
    dao.searchAppRefProvince(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppRefProvinceSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;
