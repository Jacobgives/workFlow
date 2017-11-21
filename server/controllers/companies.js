const mongoose=require('mongoose');
const Company=mongoose.model('Company');

module.exports={
  get: (req, res) => {
    Company.find({}, (companies, error) =>{
      if(companies){
        res.json(companies);
      } else{
        res.send(error);
      }
    })
  }
}
