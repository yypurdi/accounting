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
    Title:'AppContactRead',
    Heading:'AppContact',
    Username:{label :'Username'},
    Subscription:{label :'Subscription'},
    Jid:{label :'Jid'},
    Nickname:{label :'Nickname'},
    Joindate:{label :'Joindate'},
    Show:{label :'Show'},
    Status:{label :'Status'},
    Lastseen:{label :'Lastseen'},
    Unread:{label :'Unread'},
    Key:{label :'Key'},
    AppMessage:{Heading:'AppMessage',
        Username:{header:'Username'},
        Jid:{header:'Jid'},
        Msgtime:{header:'Msgtime'},
        Msgtype:{header:'Msgtype'},
        Msgsubject:{header:'Msgsubject'},
        Msgtext:{header:'Msgtext'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    req.session.previouspath = 'readAppContact?'+req._parsedUrl.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    var readAppContact = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.readAppContact(jsonObj,function(err,rows) {
                if(err) res.status(err.code).end();
                else{
                    if(rows[0]===undefined) res.redirect('/searchAppContact');
                    else{ 
                        jsonObj = rows[0];
                        resolve(jsonObj);
                    }
                }
            });
        },1000);
    });
    
    var appMessage = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchAppMessage(jsonObj,function(err,rows) {
                jsonObj.appMessage = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var sendResult = (results) => {
        console.log(jsonObj)
        parameter.record = jsonObj;        
        res.render('AppContactReadPage',parameter);
    }    
    Promise.all([readAppContact,appMessage]).then(sendResult);
});

module.exports = router;
