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
    Title:'AppBackupInfoSearch',
    Heading:'AppBackupInfo',
    BackupInfoId:{label :'BackupInfoId'},
    BackupFolder:{label :'BackupFolder'},
    ArchiveFileName:{label :'ArchiveFileName'},
    BackupDate:{label :'BackupDate'},
    BackupBy:{label :'BackupBy'},
    AppBackupInfo:{Heading:'AppBackupInfo',
        BackupInfoId:{header:'BackupInfoId'},
        BackupFolder:{header:'BackupFolder'},
        ArchiveFileName:{header:'ArchiveFileName'},
        BackupDate:{header:'BackupDate'},
        BackupBy:{header:'BackupBy'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAppBackupInfo?'+req._parsedUrl.query;
    dao.searchAppBackupInfo(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AppBackupInfoSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;
