// function is basically packed the code and this package's copy you can use anywhere and anytime

function sayMyName (){
    console.log("R");
    console.log("A");
    console.log("B");
} // sayMyName(name of function), (num1, num2) num1 and num2 values which are inside the paranthesis are parameters and the information iside the curly brackets are scope or defination of function.

sayMyName() // to call the function , sayMyName is the reference of function // R A B
  

// add 2 numbers in function
function addTwoNumbers(number1, number2){
    console.log(number1+number2 ); // we use console log to print the number
}

addTwoNumbers() //  when functio is called value would be NaN because we did not give any arguments
addTwoNumbers(3, 4) // 7 // print value
addTwoNumbers(3, "4")  // 34
addTwoNumbers(3, "a")  // 3a
addTwoNumbers(3, null)  // 3
// in javascript we can store this addtwoNumbers information into a variable as well for eample
const result = addTwoNumbers(3,4) // 7 // return result would be 8 because funstion has executed

// but what is the value of result
console.log("Result: ", result); // Result: undefined, although output is 7 whereas the result value is undefined because printing the value through console does not mean that function is returning the value, return is a seperate concept however console log print the value 
   
// here we are not using console log inside the function rather we use variable
function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result // means when my function would be executed the return the result
}

const result = addTwoNumbers(3,4)
console.log("Result: ", result); // Result: 7 // only return value would be appear but print value would not be appear beacuse i did not ask the code to print the value by using console.log inside function


/// 

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result // means when my function would be executed and return the result
    console.log("Rabia"); // value would not be printed because it  has wriiten after return and anything write after return would not be appear but if console.log("Rabia"); would write above return then Rabia would be appear as a print value.
}

const result = addTwoNumbers(3,4)
console.log("Result: ", result); //  Result: 7


/// another way of writing code
function addTwoNumbers(number1, number2){
      return number1 + number2
}

const result = addTwoNumbers(3,4)
console.log("Result: ", result); //  Result: 7