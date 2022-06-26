// Every API hit will be redirected here.
const express = require("express") ; 

// including the database document.
const taskList = require("../models/TaskSchema") ; 

// starting the router
const router = express.Router() ; 

// incase of API hit = "/" router directs to use specfic function of homeController.
router.get("/" , require("../controllers/homeController").renderHomePage) ; 

// incase of API hit = "/add-Task" router directs to use specfic function of addTaskController.
router.post("/add-Task" , require("../controllers/addTaskController").addTask) ; 

// incase of API hit = "/delete-task/:id" router directs to use specfic function of deleteTaskController.
router.get("/delete-task/:id" , require("../controllers/deleteTaskController").deleteTasks) ; 

// then this router is exported so that it can be used by main index.js file.
module.exports = router ; 