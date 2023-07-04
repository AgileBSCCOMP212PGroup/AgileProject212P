const express = require("express");
const route = express.Router();

// const services = require('../services/render')

// importing all controllers
const usercontroller = require("../controller/usercontroller");
const admincontroller = require("../controller/admincontroller");
const blazercontroller = require("../controller/blazercontroller");

/***
 *
 * @Description Root route
 * @method GET
 */

route.get("/", usercontroller.find);

// GJ212P-30 API routes for users
route.post("/api/users", usercontroller.create);
route.get("/api/users", usercontroller.find);
route.put("/api/users/:id", usercontroller.update);
route.delete("/api/users/:id", usercontroller.delete);

// GJ212P-30 API routes for admin
route.post("/api/admin", admincontroller.create);
route.get("/api/admin", admincontroller.find);
route.put("/api/admin/:id", admincontroller.update);
route.delete("/api/admin/:id", admincontroller.delete);

// GJ212P-36 API routes for blazer
route.post("/api/blazer", blazercontroller.create);
route.get("/api/blazer", blazercontroller.find);
route.put("/api/blazer/:id", blazercontroller.update);
route.delete("/api/blazer/:id", blazercontroller.delete);


module.exports = route;
