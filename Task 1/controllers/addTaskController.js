// including the document for database created by schema.
const taskList = require("../models/TaskSchema")

// incase of API hit = "/add-Task" router directs to use file function exported
module.exports.addTask = function(request , response){
    // if the current date is greater than the entered date then no task is to be added so redirect to home page.
    if(new Date() > new Date(request.body.deadline)){
        return response.redirect("back") ; 
    }
    // else create new task and redirect back to the home page.
    taskList.create({
        Name : request.body.Task_Name , 
        Description : request.body.Task_Description , 
        deadline : request.body.deadline , 
        category : request.body.category , 
        isDone : false 
    } , function(error , newRecord){
        if(error){
            console.error(`New task was not added due to: ${error}`) ; 
            return ; 
        }
        console.log(`New Record is: ${newRecord}`) ; 
        return ;
    }) ; 
    return response.redirect("back") ; 
}