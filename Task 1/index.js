// These are the necessary modules required to setup the server and database.
const express = require("express") ; 
const path = require("path") ; 
// this is Port Number.
const port = 7771 ; 

const db = require("./config/mongoose") ; 

//Starts the server
const app = express() ; 


// Setting up required view engine to ejs.
app.set("view engine" , "ejs") ; 
// Setting the path where views will be found.
app.set("views" , path.join(__dirname , "views")) ; 
// Below three are the middlewares

app.use(express.static("assets")) ; 
// sets ups the location of static files which will be accessed by rendered page.

app.use(express.urlencoded()) ; 
// Converts the request.body's value to JSON.

app.use("/" , require("./routes/mainRouter")) ; 
// any API hit will be directed to this router where furthure dealing ins made.


// This tell server to run on the mentioned Port and incase of error display error message 
// and in case of no error display  message that the server is started.
app.listen(port , function(error){
    if(error){
        console.error(`Server was unable to start due to: ${port}`) ; 
        return ; 
    }
    console.log(`The Server is up and running on port: ${port}`) ; 
    return ; 
})