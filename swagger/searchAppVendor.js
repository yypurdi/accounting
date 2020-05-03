/*
 * script route generated by KOMA
 * @author : Yan Yan Purdiansah
 */    
var express = require('express');
var router = express.Router();
var database = require('./dao');
var dao = new database.Dao();
        
/**
 * @swagger
 * /searchAppVendor:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchAppVendor
 *     summary: AppVendorSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: vendorId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: vendorNo
 *         description: String
 *         in: query
 *         type: String
 *       - name: vendorName
 *         description: String
 *         in: query
 *         type: String
 *       - name: vendorType
 *         description: String
 *         in: query
 *         type: String
 *       - name: vendorClassification
 *         description: String
 *         in: query
 *         type: String
 *       - name: vendorCategory
 *         description: String
 *         in: query
 *         type: String
 *       - name: contactPerson
 *         description: String
 *         in: query
 *         type: String
 *       - name: contactPosition
 *         description: String
 *         in: query
 *         type: String
 *       - name: contactPersonMobilePhone
 *         description: String
 *         in: query
 *         type: String
 *       - name: contactPersonEmail
 *         description: String
 *         in: query
 *         type: String
 *       - name: vendorTaxId
 *         description: String
 *         in: query
 *         type: String
 *       - name: vendorCreditLimit
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: vendorPhone1
 *         description: String
 *         in: query
 *         type: String
 *       - name: vendorPhone2
 *         description: String
 *         in: query
 *         type: String
 *       - name: vendorFax
 *         description: String
 *         in: query
 *         type: String
 *       - name: vendorEmailCompany
 *         description: String
 *         in: query
 *         type: String
 *       - name: vendorWebsite
 *         description: String
 *         in: query
 *         type: String
 *       - name: vendorCurrency
 *         description: String
 *         in: query
 *         type: String
 *       - name: vendorAddress1
 *         description: String
 *         in: query
 *         type: String
 *       - name: vendorAddress2
 *         description: String
 *         in: query
 *         type: String
 *       - name: vendorPostalCode
 *         description: String
 *         in: query
 *         type: String
 *       - name: cityId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: provinceId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: countryId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: deliveryAddress1
 *         description: String
 *         in: query
 *         type: String
 *       - name: deliveryAddress2
 *         description: String
 *         in: query
 *         type: String
 *       - name: deliveryAddressPostalCode
 *         description: String
 *         in: query
 *         type: String
 *       - name: deliveryAddressCity
 *         description: String
 *         in: query
 *         type: String
 *       - name: deliveryAddressProvince
 *         description: String
 *         in: query
 *         type: String
 *       - name: deliveryAddressCountry
 *         description: String
 *         in: query
 *         type: String
 *       - name: contactPerson2nd
 *         description: String
 *         in: query
 *         type: String
 *       - name: contactPosition2nd
 *         description: String
 *         in: query
 *         type: String
 *       - name: contactPersonMobilePhone2nd
 *         description: String
 *         in: query
 *         type: String
 *       - name: contactPersonEmail2nd
 *         description: String
 *         in: query
 *         type: String
 *       - name: contactPerson3rd
 *         description: String
 *         in: query
 *         type: String
 *       - name: contactPosition3rd
 *         description: String
 *         in: query
 *         type: String
 *       - name: contactPersonMobilePhone3rd
 *         description: String
 *         in: query
 *         type: String
 *       - name: contactPersonEmail3rd
 *         description: String
 *         in: query
 *         type: String
 *       - name: image
 *         description: byte[]
 *         in: query
 *         type: byte[]
 *       - name: notesDetails
 *         description: String
 *         in: query
 *         type: String
 *       - name: status
 *         description: String
 *         in: query
 *         type: String
 *       - name: firstContactDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *     responses:
 *       '200':
 *         description: OK
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Not Found 
 *       '500':
 *         description: Internal Server Problem
 */    

router.get('/', function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    dao.searchAppVendor(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.appVendor = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;