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
    Title:'AppRptProfitAndLossNew',
    Heading:'AppRptProfitAndLoss',
    RptProfitAndLossId:{label :'RptProfitAndLossId'},
    RptProfitAndLossName:{label :'RptProfitAndLossName'},
    DepartmentFrom:{label :'DepartmentFrom'},
    DepartmentTo:{label :'DepartmentTo'},
    CurrencyId:{label :'CurrencyId'},
    Revenue:{label :'Revenue'},
    RevenueExpenditure:{label :'RevenueExpenditure'},
    GrossMargin:{label :'GrossMargin'},
    OperationalExpenditure:{label :'OperationalExpenditure'},
    OperatingProfit:{label :'OperatingProfit'},
    OtherRevenue:{label :'OtherRevenue'},
    OtherExpenditure:{label :'OtherExpenditure'},
    NetProfit:{label :'NetProfit'},
    ComparativeRevenue:{label :'ComparativeRevenue'},
    ComparativeRevenueExpenditure:{label :'ComparativeRevenueExpenditure'},
    ComparativeGrossMargin:{label :'ComparativeGrossMargin'},
    ComparativeOperationalExpenditure:{label :'ComparativeOperationalExpenditure'},
    ComparativeOperatingProfit:{label :'ComparativeOperatingProfit'},
    ComparativeOtherRevenue:{label :'ComparativeOtherRevenue'},
    ComparativeOtherExpenditure:{label :'ComparativeOtherExpenditure'},
    ComparativeNetProfit:{label :'ComparativeNetProfit'},
    DateCreated:{label :'DateCreated'},
    CreatedBy:{label :'CreatedBy'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
        statusCode:100,
        statusMessage:'',        
        record:{rptProfitAndLossId:'',
        rptProfitAndLossName:'',
        departmentFrom:'',
        departmentTo:'',
        currencyId:'',
        revenue:'',
        revenueExpenditure:'',
        grossMargin:'',
        operationalExpenditure:'',
        operatingProfit:'',
        otherRevenue:'',
        otherExpenditure:'',
        netProfit:'',
        comparativeRevenue:'',
        comparativeRevenueExpenditure:'',
        comparativeGrossMargin:'',
        comparativeOperationalExpenditure:'',
        comparativeOperatingProfit:'',
        comparativeOtherRevenue:'',
        comparativeOtherExpenditure:'',
        comparativeNetProfit:'',
        dateCreated:'',
        createdBy:'',
        }
    }
    res.render('AppRptProfitAndLossNewPage',parameter);
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
    dao.newAppRptProfitAndLoss(jsonObj,function(err,rows) {
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('AppRptProfitAndLossNewPage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;
