var assert = require("assert");
var Log = function(args){
    assert.ok(args.subject && args.entry && args.userID,"Need subject,entry and userID");
var log = {};
log.subject = args.subject;
log.entry = args.entry ; 
log.userID = args.userID;
return log;
} ;

module.exports = Log;