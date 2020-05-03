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
    Title:'AppInventoryOpenBalanceNew',
    Heading:'AppInventoryOpenBalance',
    InventoryOpeningBalanceId:{label :'InventoryOpeningBalanceId'},
    LocationMaster:{label :'LocationMaster'},
    ProductId:{label :'ProductId'},
    BeginningBalance:{label :'BeginningBalance'},
    UnitCost:{label :'UnitCost'},
    IsSerialNumber:{label :'IsSerialNumber'},
    IsLotNumber:{label :'IsLotNumber'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
        statusCode:100,
        statusMessage:'',        
        record:{inventoryOpeningBalanceId:'',
        locationMaster:'',
        productId:'',
        beginningBalance:'',
        unitCost:'',
        isSerialNumber:'',
        isLotNumber:'',
        }
    }
    res.render('AppInventoryOpenBalanceNewPage',parameter);
    console.log(parameter);
});
router.post('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.body;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }    
    dao.newAppInventoryOpenBalance(jsonObj,function(err,rows) {
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('AppInventoryOpenBalanceNewPage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;