const express = require("express");
const route = express.Router();

// const services = require('../services/render')

// importing all controllers
const usercontroller = require("../controller/usercontroller");

/***
 *
 * @Description Root route
 * @method GET
 */

route.get("/", usercontroller.find);

// API routes for users
route.post("/api/users", usercontroller.create);
route.get("/api/users", usercontroller.find);
route.put("/api/users/:id", usercontroller.update);
route.delete("/api/users/:id", usercontroller.delete);


module.exports = route;
