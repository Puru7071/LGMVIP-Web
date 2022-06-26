// including the document for database created by schema.
const taskList = require("../models/TaskSchema") ; 

// this function help us to find the most closest deadline and we are able to 
// use this due to property of closures.
function findMinDate(Tasks){
    var taskDate = new Date("2080-12-12") ; 
    var taskName = null ; 
    for(let i = 0 ; i < Tasks.length ; i += 1){
        var tempDate = new Date(Tasks[i].deadline) ; 
        if(tempDate < taskDate){
            taskDate = tempDate
            taskName = Tasks[i].Name ; 
        }
    }
    return [taskName , taskDate] ; 
}


//incase of API hit = "/" router directs to use file function exported which renders to home.ejs file 
//with the necessary data required by ejs

module.exports.renderHomePage = function(request , response){
    taskList.find({}, function (error, Tasks) {
        if(error){
            console.log(`Opps !! Unable to Render the App due to: ${error}`) ; 
            return ; 
        }
        
        let obj = {
            tasksToDo : Tasks , 
            number : Tasks.length , 
            closestTask : findMinDate(Tasks)[0] , 
            closestDate : findMinDate(Tasks)[1] 
        }
        
        return response.render("home",obj) ; 
    });
}