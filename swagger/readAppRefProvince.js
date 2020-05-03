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
 * /readAppRefProvince:
 *   get:
 *     tags:
 *       - Administration
 *     description: readAppRefProvince
 *     summary: AppRefProvinceRead
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: provinceId
 *         description: Long 
 *         in: query
 *         type: Long
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
    jsonObj.rowid = 0;
    
    var readAppRefProvince = new Promise((resolve, reject) => {
        dao.readAppRefProvince(jsonObj,function(err,rows) {
            if(err) res.status(err.code).end();
            else{
                if(rows[0]===undefined) res.status(404).end();
                else{ 
                    jsonObj = rows[0];
                    resolve(jsonObj);
                }
            }
        });
    });
    
    var appCompanyInfo = new Promise((resolve, reject) => {
        dao.searchAppCompanyInfo(jsonObj,function(err,rows) {
            jsonObj.appCompanyInfo = rows;
            resolve(jsonObj);
        });        
    });
    
    var appCustomer = new Promise((resolve, reject) => {
        dao.searchAppCustomer(jsonObj,function(err,rows) {
            jsonObj.appCustomer = rows;
            resolve(jsonObj);
        });        
    });
    
    var appEmployee = new Promise((resolve, reject) => {
        dao.searchAppEmployee(jsonObj,function(err,rows) {
            jsonObj.appEmployee = rows;
            resolve(jsonObj);
        });        
    });
    
    var appRefCity = new Promise((resolve, reject) => {
        dao.searchAppRefCity(jsonObj,function(err,rows) {
            jsonObj.appRefCity = rows;
            resolve(jsonObj);
        });        
    });
    
    var appVendor = new Promise((resolve, reject) => {
        dao.searchAppVendor(jsonObj,function(err,rows) {
            jsonObj.appVendor = rows;
            resolve(jsonObj);
        });        
    });
    
    var sendResult = (results) => {
        console.log(jsonObj)
        res.status(200).send(jsonObj);
    }
    
    Promise.all([readAppRefProvince,appCompanyInfo,appCustomer,appEmployee,appRefCity,appVendor]).then(sendResult);
});

module.exports = router;
