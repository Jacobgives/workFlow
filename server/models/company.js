const mongoose=require("mongoose");
var Schema = mongoose.Schema;
const BikeSchema=new mongoose.Schema({
  name: String,
  imgUrl: String,
  price: Number,
  desc: String,
  loc: String,
  users: [{}]
  _admin: {type: Schema.Types.ObjectId, ref: "User"}
}, {timestamps:true})
mongoose.model('Bike', BikeSchema);
