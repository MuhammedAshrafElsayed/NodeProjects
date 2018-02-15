var Registration = require("../lib/registration");
var should = require("should");
var db = require("second-thought");
describe("Registration",function(){
    var reg = {};
    before(function(done){
        db.connect({db:"membership"},function(err,db){
            reg = new Registration(db);
            done();
        });
        
    });
    describe("a Valid Application",function(){
        var regResult={};
        before(function(done){
            reg.applyForMembership({email:"ashote2@hotmail.com",
            password:"confirm",
            confirm:"confirm"},
            function(err,result){
                regResult = result;
                done();
            });
            
        });
        it("is successsful",function(){
            regResult.success.should.equal(true);
        });
        it("creates a user");
        it("creates a log entry");
        it("sets user's status to approved");
        it("sets user's welcome message");
    });
    describe("an empty or null email",function(){
        it("is not successsful");
        it("tells the user that email is required");
    });
    describe("an empty or null password",function(){
        it("is not successsful");
        it("tells the user that password is required");
    });
    describe("password and confirm mismatch",function(){
        it("is not successsful");
        it("tells the user that password don't match");
    });
    describe("email is already exists",function(){
        it("is not successsful");
        it("tells the user that email is aready exists");
    });
    
});