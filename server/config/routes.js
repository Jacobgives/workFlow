const users = require("../controllers/users");
const companies = require("../controllers/companies");

module.exports=(app)=>{
  app.get("/", (req, res)=>{
    res.render("index")
  });
  app.get("/users", users.get)
  app.get("/companies", companies.get)
  app.get("*", (req, res)=>{
    redirect('/');
  });
}
