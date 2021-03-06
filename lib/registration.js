var User =require("../models/user");
var db = require("second-thought");
var Application = require("../models/Application");
var assert = require("assert");
var RegResult = function(){
    var result ={success:false,
        message:null,
        user:null};
    return result;
};
var Registration = function(db){
var self = this;
    var validateInputs = function(app){
        if(!app.email ||!app.password )
        {
            app.setInvalid("Email and password are required");
        }else if(app.password !== app.confirm)
        {
            app.setInvalid("password don't match");
        }else{
            app.validate();
        }
    };
   
    var checkIfUserExists = function(app,next){
    db.users.exists({email:app.email},next);
};
    
    self.applyForMembership = function(args,next){
    
        var regResult = new RegResult();
        var app = new Application(args);
        validateInputs(app);
        checkIfUserExists(app,function(err,exists){
            assert.ok(err===null,err);
            if(!exists)
            {
                regResult.success = true;
                regResult.message = "Welcome to my website";
                regResult.user = new User(args);
            }
            next(null,regResult);
        });
    };
    return self;
};


module.exports = Registration;