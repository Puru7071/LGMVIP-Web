// Used the IIFE approach for writting the code.
(function(){
    "use strict"
    console.log("Script Loaded!!") ; 

    // This is event that make sure that date is not less than the current date.
    document.getElementById("btn1").addEventListener("click" , function(event){
        if(new Date() > new Date(document.getElementById("inputField3").value)){
            window.alert("Date should be greater than current date !!") ; 
            return ; 
        }
    }) ; 


    // This event that handles the on hover event for social media icons.
    var socialMediaIcons = document.getElementsByClassName("socialMediaIcons") ; 
    console.log(socialMediaIcons) ; 
    for(let i = 0 ; i < socialMediaIcons.length ; i += 1){
        socialMediaIcons[i].addEventListener("mouseover" , function(event){
            event.stopPropagation() ; 

            if(i == 0){
                socialMediaIcons[i].style.color = "#0a66c2" ; 
            }
            if(i == 1){
                socialMediaIcons[i].style.color = "#c32aa3" ; 
            }
            if(i == 2){
                socialMediaIcons[i].style.color = "#1b1f23" ; 
            }
            if(i == 3){
                socialMediaIcons[i].style.color = "#f7f400" ; 
            }
        
            return ; 
        }) ; 

        socialMediaIcons[i].addEventListener("mouseout" , function(event){
            event.stopImmediatePropagation() ; 
            socialMediaIcons[i].style.color = "#f1faee" ; 
            
        }) ; 
    }


    // This is for the contract and expand animation of the task cards that is used to display the minutes 
    // of the task that are added by the user.
    var dropDown = document.getElementsByClassName("dropDown") ; 
    for(let i = 0 ; i < dropDown.length ; i += 1){
        dropDown[i].addEventListener("click" , function(event){
            if(dropDown[i].getAttribute("data-isExpanded") == "false"){
                document.getElementsByClassName("taskCard")[i].style.height = "280px" ; 
                document.getElementsByClassName("contract")[i].innerHTML = "Contract" ; 
                document.getElementsByClassName("arrow")[i].setAttribute("src" , "./images/dropup.svg") ; 
                document.getElementsByClassName("dropDownContainer")[i].style.display = "block" ;
                document.getElementsByClassName("dropDownContainer")[i].style.bottom = "50px" ;
                document.getElementsByClassName("dropDownContainer")[i].style.left = "4%" ;
                dropDown[i].setAttribute("data-isExpanded" ,"true") ; 
            }

            else if(dropDown[i].getAttribute("data-isExpanded") == "true"){
                document.getElementsByClassName("taskCard")[i].style.height = "80px" ; 
                document.getElementsByClassName("contract")[i].innerHTML = "Expand" ; 
                document.getElementsByClassName("arrow")[i].setAttribute("src" , "./images/dropdown.svg") ; 
                document.getElementsByClassName("dropDownContainer")[i].style.display = "none" ;
                dropDown[i].setAttribute("data-isExpanded" ,"false") ;
            }    
        }) ; 
    }
})() ; 