var mongoose =  require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose"); 

var ngoschema=new mongoose.Schema({
    // username: String,
    username:String,
    streetaddress:String,
    city:String,
    postalcode:Number,
    state:String,
    email:String,
    mobile_no:Number,
    url:String,
    password: String
});
ngoschema.plugin(passportLocalMongoose);
module.exports=mongoose.model("ngo",ngoschema);