var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 
var UserSchema = new Schema({ 
    customer_id : String,
    name: String,
    email_id : String,
    referral_id : String,
    payback : Number,
    isAmbassador  : Boolean,
    joiningDate :  Date,
    lastUpdated : Date
}); 

module.exports = mongoose.model('User', UserSchema, 'User'); 