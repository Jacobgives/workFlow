const users = require("../controllers/users");
const companies = require("../controllers/companies");

module.exports=(app)=>{
  app.get("/users", users.index);
  app.post("/users", users.add);
}
