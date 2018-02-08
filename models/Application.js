var Application = function(args){
    var app={};
    this.email = args.email;
    this.password = args.password;
    this.confirm = args.confirm;
    this.status = "pending";
    this.message = null;
    return this;
};
Application.prototype.isValid = function(){
    return this.status == "valid";
    };

Application.prototype.setInvalid = function(message){
        this.message = message ;
        this.status == "Invalid";
};

Application.prototype.isInvalid = function(){
    return !this.isValid();
};
Application.prototype.validate = function(message){
    return this.status = "valid" ;
};

module.exports = Application;