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
 * /searchAppEmployee:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchAppEmployee
 *     summary: AppEmployeeSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: employeeId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: employeeNumber
 *         description: String
 *         in: query
 *         type: String
 *       - name: firstname
 *         description: String
 *         in: query
 *         type: String
 *       - name: middlename
 *         description: String
 *         in: query
 *         type: String
 *       - name: lastname
 *         description: String
 *         in: query
 *         type: String
 *       - name: nationality
 *         description: String
 *         in: query
 *         type: String
 *       - name: dob
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: gender
 *         description: String
 *         in: query
 *         type: String
 *       - name: maritalStatus
 *         description: String
 *         in: query
 *         type: String
 *       - name: ethnicity
 *         description: String
 *         in: query
 *         type: String
 *       - name: ktpNumber
 *         description: String
 *         in: query
 *         type: String
 *       - name: passportNumber
 *         description: String
 *         in: query
 *         type: String
 *       - name: drivingLicenceNo
 *         description: String
 *         in: query
 *         type: String
 *       - name: addressLine1
 *         description: String
 *         in: query
 *         type: String
 *       - name: addressLine2
 *         description: String
 *         in: query
 *         type: String
 *       - name: cityId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: countryId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: provinceId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: postalCode
 *         description: String
 *         in: query
 *         type: String
 *       - name: homePhone
 *         description: String
 *         in: query
 *         type: String
 *       - name: mobilePhone
 *         description: String
 *         in: query
 *         type: String
 *       - name: workEmail
 *         description: String
 *         in: query
 *         type: String
 *       - name: privateEmail
 *         description: String
 *         in: query
 *         type: String
 *       - name: joinedDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: confirmationDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: terminationDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: supervisorName
 *         description: String
 *         in: query
 *         type: String
 *       - name: indirectSupervisorName
 *         description: String
 *         in: query
 *         type: String
 *       - name: firstLevelApprover
 *         description: String
 *         in: query
 *         type: String
 *       - name: secondLevelApprover
 *         description: String
 *         in: query
 *         type: String
 *       - name: thirdLevelApprover
 *         description: String
 *         in: query
 *         type: String
 *       - name: notes
 *         description: String
 *         in: query
 *         type: String
 *       - name: departmentId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: workStationId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: jobTitleId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: payGradeId
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: employmentStatusId
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
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    dao.searchAppEmployee(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.appEmployee = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
