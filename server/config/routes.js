const users = require("../controllers/users");

module.exports=(app)=>{
  app.get("/users", users.get)
  app.get("*", (req, res)=>{
    redirect('/');
  });
}
