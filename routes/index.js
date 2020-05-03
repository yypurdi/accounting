/*
 * script route generated by KOMA
 * @author : Yan Yan Purdiansah
 */
var request = require('request');
var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');
var database = require('./dao');
var dao = new database.Dao();

var sessionChecker = function(req, res, next){
	console.log(req.device.type);
	if(req.device.type=='phone'){
		if (req.session.user_sid && req.cookies.user_sid) {
			res.render('mobile', {session: req.session, cookies: req.cookies});
		} else {
			next();
		}
	}
	else{
		if (req.session.user_sid && req.cookies.user_sid) {
			res.render('index', {session: req.session, cookies: req.cookies});
		} else {
			next();
		}
	}
};

/* GET home page. */
router.get('/', sessionChecker, function(req, res){
	if(req.device.type=='phone'){
		res.render('login', { title: 'Login', msg: null });
	}	
	else{
		res.render('home', { title: 'Home', msg: null });
	}
});

/* GET login page. */
router.get('/login', sessionChecker, function(req, res){
	res.render('login', { title: 'Login', msg: null});
});

/* POST Authentication. */
router.post('/login', function(req, res, next) {
	var jsonObj = req.body;
	dao.readAppUsers(jsonObj,function(err,rows) {
        if(rows[0]===undefined){
			res.render('login', { title: 'Login',msg:'Please enter correct Username and Password'});
        }else{
			if(jsonObj.password == rows[0].password){
				jsonObj = rows[0];
				jsonObj.rowid = 0;
				dao.searchAppAuthorities(jsonObj,function(err,rows) {
					jsonObj.admAuthorities = rows;
					req.signedCookies
					req.session.sessionid = req.sessionID; /* update 20190921 */
					req.session.loggedin = true;
					req.session.username = jsonObj.username;
					req.session.name = jsonObj.name;
					if(jsonObj.admAuthorities[0]===undefined) req.session.user_acl = 'ROLE_USER';
					else req.session.user_acl = jsonObj.admAuthorities[0].authority;
					req.session.user_sid = req.cookies.user_sid;
					let startTime = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
					jsonIn = {
						"lastUsed": startTime,
						"series": req.sessionID,
						"token": req.cookies.io,
						"username": jsonObj.username,
						"name": jsonObj.name,
					}
					if(jsonIn.token===undefined) jsonIn.token = '';
					dao.newAppPersistentLogins(jsonIn,function(err,rows) {
						if(err) throw new Error(err);
						else res.redirect('/');
					});	
				});
			}else{
				res.render('login', { title: 'Login',msg:'Please enter correct Username and Password'});	
			}
        }
    });
});

/* GET Logout. */
router.get('/logout',function(req, res) {
	req.session.loggedin = false;
	req.session.user_sid = null;
	res.clearCookie('user_sid');
	res.redirect('/login');
});

/* GET Register page. */
router.get('/register', sessionChecker, function(req, res){
	res.render('register', { title: 'Register', msg: null});
});

router.post('/register', sessionChecker, function(req, res){
	res.render('login', { title: 'Login',msg:'Please enter Username and Password'});
});

/* GET Forgot-password page. */
router.get('/forgot-password', sessionChecker, function(req, res){
	res.render('forgot-password', { title: 'Forgot Password', msg: null});
});

router.post('/forgot-password', sessionChecker, function(req, res){
	res.render('login', { title: 'Login',msg:'Please enter Username and Password'});
});

module.exports = router;
