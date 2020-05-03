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
    Title:'AppGroupsSearch',
    Heading:'AppGroups',
    GroupId:{label :'GroupId'},
    GroupName:{label :'GroupName'},
    AppGroups:{Heading:'AppGroups',
        GroupId:{header:'GroupId'},
        GroupName:{header:'GroupName'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppGroups?'+req._parsedUrl.query;
    dao.searchAppGroups(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppGroupsSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;
