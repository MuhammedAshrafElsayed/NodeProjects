var User =require("../models/user");
var Application = require("../models/Application");
var RegResult = function(){
    var result ={success:false,
        message:null,
        user:null};
    return result;
};

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
exports.applyForMembership = function(args){

    var regResult = new RegResult();
    var app = new Application(args);
    validateInputs(app);
    console.log(app);
    if(app.isValid())
    {
        regResult.success = true;
        regResult.message = "Welcome to my website";
    }

    regResult.user = new User(args);

    return regResult;
};