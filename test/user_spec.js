var should = require("should");
var User = require("../models/user");

describe("User", function(){
    describe("defaults",function(){

        var user={};
        before(function(){user = new User({email:"ashote2@hotmail.com"});});
        it("email is ashotehotmail.com",function(){
            user.email.should.equal("ashote2@hotmail.com");
        });
        it("has authentication token",function()
        {
        user.authenticationToken.should.be.defined;
        });
        it("has a pending status",function(){
            user.status.should.equal("pending");
        });
        it("has a Created date",function(){
            user.createdAt.should.be.defined;
        });
        it("has a signincount of 0",function(){
            user.signInCount.should.equal(0);
        });
        it("has lastlogIn",function(){
            user.lastlogIn.should.be.defined;
        });
        it("has currentLoginAt",function(){
            user.currentLoginAt.should.be.defined;
        });
    });

});