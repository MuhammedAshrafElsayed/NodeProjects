var Registration = require("../lib/registration");
var should = require("should");
describe("Registration",function(){
    describe("Valid Application",function(){
        var regResult={};
        before(function(){
            regResult = Registration.applyForMembership({email:"ashote2@hotmail.com",password:"confirm",confirm:"confirm"});
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