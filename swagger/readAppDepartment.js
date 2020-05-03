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
 * /readAppDepartment:
 *   get:
 *     tags:
 *       - Administration
 *     description: readAppDepartment
 *     summary: AppDepartmentRead
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: departmentId
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
    
    var readAppDepartment = new Promise((resolve, reject) => {
        dao.readAppDepartment(jsonObj,function(err,rows) {
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
    
    var appBankCrFa = new Promise((resolve, reject) => {
        dao.searchAppBankCrFa(jsonObj,function(err,rows) {
            jsonObj.appBankCrFa = rows;
            resolve(jsonObj);
        });        
    });
    
    var appBankWcFa = new Promise((resolve, reject) => {
        dao.searchAppBankWcFa(jsonObj,function(err,rows) {
            jsonObj.appBankWcFa = rows;
            resolve(jsonObj);
        });        
    });
    
    var appChartOfAccount = new Promise((resolve, reject) => {
        dao.searchAppChartOfAccount(jsonObj,function(err,rows) {
            jsonObj.appChartOfAccount = rows;
            resolve(jsonObj);
        });        
    });
    
    var appEmployee = new Promise((resolve, reject) => {
        dao.searchAppEmployee(jsonObj,function(err,rows) {
            jsonObj.appEmployee = rows;
            resolve(jsonObj);
        });        
    });
    
    var appProductCategory = new Promise((resolve, reject) => {
        dao.searchAppProductCategory(jsonObj,function(err,rows) {
            jsonObj.appProductCategory = rows;
            resolve(jsonObj);
        });        
    });
    
    var appRecurringBankCrFa = new Promise((resolve, reject) => {
        dao.searchAppRecurringBankCrFa(jsonObj,function(err,rows) {
            jsonObj.appRecurringBankCrFa = rows;
            resolve(jsonObj);
        });        
    });
    
    var appRecurringBankWcFa = new Promise((resolve, reject) => {
        dao.searchAppRecurringBankWcFa(jsonObj,function(err,rows) {
            jsonObj.appRecurringBankWcFa = rows;
            resolve(jsonObj);
        });        
    });
    
    var appRptBalanceSheet = new Promise((resolve, reject) => {
        dao.searchAppRptBalanceSheet(jsonObj,function(err,rows) {
            jsonObj.appRptBalanceSheet = rows;
            resolve(jsonObj);
        });        
    });
    
    var appRptProfitAndLoss = new Promise((resolve, reject) => {
        dao.searchAppRptProfitAndLoss(jsonObj,function(err,rows) {
            jsonObj.appRptProfitAndLoss = rows;
            resolve(jsonObj);
        });        
    });
    
    var appRptTrialBalance = new Promise((resolve, reject) => {
        dao.searchAppRptTrialBalance(jsonObj,function(err,rows) {
            jsonObj.appRptTrialBalance = rows;
            resolve(jsonObj);
        });        
    });
    
    var sendResult = (results) => {
        console.log(jsonObj)
        res.status(200).send(jsonObj);
    }
    
    Promise.all([readAppDepartment,appBankCrFa,appBankWcFa,appChartOfAccount,appEmployee,appProductCategory,appRecurringBankCrFa,appRecurringBankWcFa,appRptBalanceSheet,appRptProfitAndLoss,appRptTrialBalance]).then(sendResult);
});

module.exports = router;
