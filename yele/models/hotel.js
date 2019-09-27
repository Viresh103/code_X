var mongoose =  require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose"); 

var hotelschema=new mongoose.Schema({
    username: String,
    hotelname:String,
    streetaddress:String,
    city:String,
    postalcode:Number,
    state:String,
    password: String
});
hotelschema.plugin(passportLocalMongoose);
module.exports=mongoose.model("hotel",hotelschema);