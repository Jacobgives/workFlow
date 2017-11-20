const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
  user: String,
  personal: Array,
  business: Array,
  _urating: {type: Schema.Types.ObjectId, ref: "User"},
  _crating: {type: Schema.Types.ObjectId, ref: "Company"}
}, {timestamps:true})
mongoose.model('User', UserSchema)
