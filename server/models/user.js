const mongoose=require("mongoose");
var Schema = mongoose.Schema;
const UserSchema=new mongoose.Schema({
  user: String,
  personal: Array,
  total: Number,
  _urating: {type: Schema.Types.ObjectId, ref: "User"}
}, {timestamps:true})
mongoose.model('User', UserSchema)
