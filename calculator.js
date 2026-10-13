const display = document.querySelector("#display")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clear = document.querySelector("#clear")
const equal = document.querySelector("#equal")

let firstnumber = ""
let secondnumber = ""
let operator = ""

numbers.forEach(function(button){
    button.addEventListener("click", function(){
        if (operator === ""){
            firstnumber = firstnumber + button.textContent
            display.textContent = firstnumber
        }else {
            secondnumber = secondnumber + button.textContent
            display.textContent = secondnumber
        }
    })
})

operators.forEach(function(button){
    button.addEventListener("click", function(){
        operator = button.textContent
         display.textContent = firstnumber + operator + secondnumber
    })
})

equal.addEventListener("click", function(){
    let num1 = Number(firstnumber)
    let num2 = Number(secondnumber)
    
    let answer;
    if (operator === "+"){
        answer = num1 + num2
    }
    else if (operator === "-"){
        answer = num1 - num2
    }
    else if (operator === "*"){
        answer = num1 * num2
    }
    else if (operator === "/"){
        answer = num1 / num2
    }
    display.textContent = answer
})

clear.addEventListener("click", function(){
    firstnumber = ""
    secondnumber = ""
    operator = ""
    display.textContent = "0"
})