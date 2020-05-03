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
    Title:'AppCustomerDelete',
    Heading:'AppCustomer',
    CustomerId:{label :'CustomerId'},
    CustNo:{label :'CustNo'},
    CustName:{label :'CustName'},
    CustType:{label :'CustType'},
    CustClassification:{label :'CustClassification'},
    CustCategory:{label :'CustCategory'},
    ContactPerson:{label :'ContactPerson'},
    ContactPosition:{label :'ContactPosition'},
    ContactPersonMobilePhone:{label :'ContactPersonMobilePhone'},
    ContactPersonEmail:{label :'ContactPersonEmail'},
    CustTaxId:{label :'CustTaxId'},
    CustCreditLimit:{label :'CustCreditLimit'},
    CustPhone1:{label :'CustPhone1'},
    CustPhone2:{label :'CustPhone2'},
    CustFax:{label :'CustFax'},
    CustEmailCompany:{label :'CustEmailCompany'},
    CustWebsite:{label :'CustWebsite'},
    CustCurrency:{label :'CustCurrency'},
    CustAddress1:{label :'CustAddress1'},
    CustAddress2:{label :'CustAddress2'},
    CustPostalCode:{label :'CustPostalCode'},
    CityId:{label :'CityId'},
    ProvinceId:{label :'ProvinceId'},
    CountryId:{label :'CountryId'},
    DeliveryAddress1:{label :'DeliveryAddress1'},
    DeliveryAddress2:{label :'DeliveryAddress2'},
    DeliveryAddressPostalCode:{label :'DeliveryAddressPostalCode'},
    DeliveryAddressCity:{label :'DeliveryAddressCity'},
    DeliveryAddressProvince:{label :'DeliveryAddressProvince'},
    DeliveryAddressCountry:{label :'DeliveryAddressCountry'},
    ContactPerson2nd:{label :'ContactPerson2nd'},
    ContactPosition2nd:{label :'ContactPosition2nd'},
    ContactPersonMobilePhone2nd:{label :'ContactPersonMobilePhone2nd'},
    ContactPersonEmail2nd:{label :'ContactPersonEmail2nd'},
    ContactPerson3rd:{label :'ContactPerson3rd'},
    ContactPosition3rd:{label :'ContactPosition3rd'},
    ContactPersonMobilePhone3rd:{label :'ContactPersonMobilePhone3rd'},
    ContactPersonEmail3rd:{label :'ContactPersonEmail3rd'},
    Image:{label :'Image'},
    NotesDetails:{label :'NotesDetails'},
    Status:{label :'Status'},
    FirstContactDate:{label :'FirstContactDate'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    dao.deleteAppCustomer(jsonObj,function(err,rows) {
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
