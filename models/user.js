var assert = require("assert");
var utility = require("../../lib/utility");

var User = function(args){
assert.ok(args.email ,"email is required");
var user ={};
user.email = args.email;
user.status = args.status || "pending";
user.createdAt = user.createdAt || new Date();
user.signInCount= user.signInCount || 0;
user.lastlogIn= user.lastlogIn || new Date();
user.currentLoginAt= user.currentLoginAt || new Date();
user.authenticationToken =args.authenticationToken || utility.randomString(18);
return user;
};
module.exports = User;