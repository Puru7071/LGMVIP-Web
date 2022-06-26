// including the document for database created by schema.
const taskList = require("../models/TaskSchema")

// incase of API hit = "/delete-task" router directs to use file function exported
module.exports.deleteTasks = function(request , response){
    taskList.findByIdAndDelete(request.params.id , function(error){
        if(error){
            console.error(`Error in deleting the Task: ${error}`) ; 
            return ; 
        }
        console.log(`Task Deleted Successfully !!`) ; 
    }) ; 
    return response.redirect("back") ; 
}