"use strict"

var buttons = document.getElementsByClassName("Button") ; 
var screenItem = document.getElementById("Screen") ; 
var operand1 = 0 ; 
var operand2 = null ; 
var operator = null ; 
function fact(n){
    if(n<=1){
        return 1 ; 
    }
    return fact(n-1) * n ; 
};

for(let i = 0 ; i < buttons.length ; i ++){
    buttons[i].addEventListener("click",function(event){
        var value = buttons[i].getAttribute("data-value") ; 
        if(value == 'AC'){
            screenItem.innerHTML ="" ; 
            operand1 = 0 ; operand2 = null ; 
            operator = null ;
        }
        else if(value == '!'){
            var number = parseInt(screenItem.innerHTML) ;
            screenItem.innerHTML = fact(number) ; 
            operand1 = 0 ; operand2 = null ; 
            operator = null ;
        }
        else if(value == 'C'){
            operator = 'C' ; 
            operand1 = parseInt(screenItem.innerHTML) ;
            screenItem.innerHTML = "" ;  
        }
        else if(value == '^'){
            operator = '^' ; 
            operand1 = parseFloat(screenItem.innerHTML) ;
            screenItem.innerHTML = "" ;  
        }
        else if(value == '/'){
            operator = '/' ; 
            operand1 = parseFloat(screenItem.innerHTML) ;
            screenItem.innerHTML = "" ;  
        }
        else if(value == '*'){
            operator = '*' ; 
            operand1 = parseFloat(screenItem.innerHTML) ;
            screenItem.innerHTML = "" ;  
        }
        else if(value == '-'){
            operator = '-' ; 
            operand1 = parseFloat(screenItem.innerHTML) ;
            screenItem.innerHTML = "" ;  
        }
        else if(value == '+'){
            operator = '+' ; 
            operand1 = parseFloat(screenItem.innerHTML) ;
            screenItem.innerHTML = "" ;  
        }
        else if(value == "clr"){
            var str = screenItem.innerHTML ; 
            str = str.substring(0,str.length-1) ; 
            screenItem.innerHTML = str ; 
        }
        else if( value == "Sq"){
            operand1 = parseFloat(screenItem.innerHTML) ; 
            screenItem.innerHTML = Math.sqrt(operand1)  ; 
            operand1 = 0 ; operand2 = null ; 
            operator = null ;
        }
        else if( value == "cb"){
            operand1 = parseFloat(screenItem.innerHTML) ;
            screenItem.innerHTML = Math.cbrt(operand1) ; 
            operand1 = 0 ; operand2 = null ; 
            operator = null ;
        }
        else if(value == "Mod"){
            operand1 = screenItem.innerHTML ; 
            operator = "Mod" ; 
            screenItem.innerHTML = "" ; 
        }
        else if(value == "e"){
            operand1 = parseInt(screenItem.innerHTML); 
            screenItem.innerHTML = Math.exp(operand1); 
            operand1 = 0 ; operand2 = null ; 
            operator = null ;
        }
        else if(value == '='){
            if(operator == null){
                screenItem.innerHTML = "NaN"
            }
            if(operator == "C"){
                operand2 = parseInt(screenItem.innerHTML) ;
                screenItem.innerHTML = fact(operand1)/(fact(operand2)*fact(operand1-operand2)); 
                operand1 = 0 ; operand2 = null ; 
                operator = null ;
            }
            else if(operator == "^"){
                operand2 = parseFloat(screenItem.innerHTML) ; 
                screenItem.innerHTML = Math.pow(operand1,operand2) ; 
                operand1 = 0 ; operand2 = null ; 
                operator = null ;
            }
            else if( operator == "+"){
                operand2 = parseFloat(screenItem.innerHTML) ; 
                screenItem.innerHTML = operand2 + operand1 ; 
                operand1 = 0 ; operand2 = null ; 
                operator = null ;
            }
            else if( operator == "*"){
                operand2 = parseFloat(screenItem.innerHTML) ; 
                screenItem.innerHTML = operand2*operand1 ; 
                operand1 = 0 ; operand2 = null ; 
                operator = null ;
            }
            else if( operator == "/"){
                operand2 = parseFloat(screenItem.innerHTML) ; 
                if(operand2 == 0 ){
                    screenItem.innerHTML = "Infinity" ; 
                }
                else{
                    screenItem.innerHTML = operand1/operand2 ; 
                }
                operand1 = 0 ; operand2 = null ; 
                operator = null ;
            }
            else if(operator = "Mod"){
                operand2 = screenItem.innerHTML ; 
                screenItem.innerHTML = operand1%operand2 ; 
                operand1 = 0 ; operand2 = null ; 
                operator = null ;
            }
            
        }
        else {
            screenItem.innerHTML += value ;
        }
    });
}

