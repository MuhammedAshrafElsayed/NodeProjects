var User =require("../models/user");
var db = require("second-thought");
var Application = require("../models/Application");
var assert = require("assert");
var bc = require("bcrypt-nodejs");
var Log = require("../models/log");



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
var saveUser = function(user,next){
    db.users.save(user,next);
};
var addLogEntry = function(user,next){
    var log ={};
    log = new Log({subject:"Registration",userID : user.id,entry :"Successfully Registered"});
     db.logs.save(log,next);
};  
    self.applyForMembership = function(args,next){
    
        var regResult = new RegResult();
        var app = new Application(args);
        validateInputs(app);
        checkIfUserExists(app,function(err,exists){
            assert.ok(err===null,err);
            if(!exists)
            {
               var user = new User(args);
               user.status ="Approved";
                user.hashedPassword = bc.hashSync(app.password);
                saveUser(user,function(err,newUser){
                    assert.ok(err===null,err);
                    regResult.user = newUser; 
                    addLogEntry(newUser,function(err,result){
                        regResult.success = true;
                        regResult.message = "Welcome to my website";
                        next(null,regResult);
                    });
                    
                });
            }
            
        });
    };
    return self;
};


module.exports = Registration;