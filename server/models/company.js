const mongoose=require("mongoose");
var Schema = mongoose.Schema;
const CompanySchema=new mongoose.Schema({
  company: String,
  
  users: [{}],
  _admin: {type: Schema.Types.ObjectId, ref: "User"}
}, {timestamps:true})
mongoose.model('Company', CompanySchema);
