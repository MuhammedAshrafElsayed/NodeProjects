exports.randomString = function(stringlength)
{
 stringlength = stringlength ||12 ;
 var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
 var result = '';
 for (var index = 0; index < stringlength; index++) {
     var rnum = Math.floor(Math.random()*chars.length);
     result+= chars.substring(rnum,rnum+1);
     
 }
 return result;
};