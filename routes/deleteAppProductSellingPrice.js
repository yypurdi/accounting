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
    Title:'AppProductSellingPriceDelete',
    Heading:'AppProductSellingPrice',
    ProductPriceId:{label :'ProductPriceId'},
    ChangedDate:{label :'ChangedDate'},
    ChangedBy:{label :'ChangedBy'},
    NormalPriceEffectiveDate:{label :'NormalPriceEffectiveDate'},
    CalculationMethod:{label :'CalculationMethod'},
    AmountOfCalculationMethod:{label :'AmountOfCalculationMethod'},
    RoundUp:{label :'RoundUp'},
    SmallestUnit:{label :'SmallestUnit'},
    PricingBase:{label :'PricingBase'},
    IsIncludeTaxToSellingPrice:{label :'IsIncludeTaxToSellingPrice'},
    IsSelectedItem:{label :'IsSelectedItem'},
    CurrentSellingPrice:{label :'CurrentSellingPrice'},
    NewSellingPrice:{label :'NewSellingPrice'},
    EffectiveDateOfNewSellingPrice:{label :'EffectiveDateOfNewSellingPrice'},
    ProductId:{label :'ProductId'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    dao.deleteAppProductSellingPrice(jsonObj,function(err,rows) {
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
