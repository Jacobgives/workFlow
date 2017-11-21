const mongoose=require('mongoose');
const User=mongoose.model('User');

module.exports={
  get: (req, res) => {
    User.find({}, (users, error) =>{
      if(users){
        res.json(users);
      } else{
        res.send(error);
      }
    })
  },
  
}
