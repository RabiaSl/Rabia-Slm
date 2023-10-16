
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



// how many ways user can take values in parameters
function loginUserMessage (username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Rabia")); 
loginUserMessage ("Rabia") // nothing appear although function has executed and function has return the value but we did not iform it to print the value to store the value in the variable
console.log(loginUserMessage("Rabia")); // Rabia  just logged in // because i gave the instruction to print through console.log
console.log(loginUserMessage()); // for example if the method is called  but did not pass any value then result would be "undeinef just logged in" 

// then we have to check if the value is presnt or not by using " if else" method

function loginUserMessage (username){
    if (username===undefined) {
        console.log("Please enter a username");  
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Rabia"));//  Please enter a username  undefined just logged in

// if i want that return should not execute then just write return inside the if function

function loginUserMessage (username){
    if (username===undefined) {
        console.log("Please enter a username"); 
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Rabia")); // Please enter a user name  undefined


// use of ! mark

function loginUserMessage (username){
    if (!username) {
        console.log("Please enter a username"); 
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Rabia")); //Please enter a user name  undefined

// if you want to avoid the undefined situation then you can use the default value and when you pass any value then it would override default value

function loginUserMessage (username="sam"){
    if (!username) {
        console.log("Please enter a username"); 
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Rabia")); // sam just logged in// because by using default value if fnction would not executed as it is for when username is undefined

//  Add price in shopping cart


function CalculateCartPrice(num1) {
    return num1
    
}

console.log(CalculateCartPrice (2)); // 2


// but if more than values are added in my cart

console.log(CalculateCartPrice (200,400,500)); // 200 first items appear but how we can use other values as well in this case we should use rest operator

// if i have more than one values then i should rest operator which is similar to spread opertor

function CalculateCartPrice(...num1) {
    return num1
    
}

console.log(CalculateCartPrice (200,400,500)); // [200,400,500] // basically how we pass parameters by using rest operator in function

function CalculateCartPrice(value1, value2,...num1) {
    return num1
    
}

console.log(CalculateCartPrice (200,400,500,2000)); // [500,2000]


// objects

const user = {

    username: "Rabia",
    price:199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price isv${anyobject.price}` );
    
}
handleObject(user) // Username is Rabia and price is 199


// but problem can come if we write prices instead of price in const user then price would be undefined thats why you have to make sure that the values i am passing has the same data type or not
  // object can pass directly as well

handleObject({
    username:"Sam",
    price:399

}) // Username is Sam and price is 399

// we can also pass arrays as like objects in functions

// we are passing array by putting in variabke which is myNewArray

const myNewArray =[200,400,600]
function returnSecondValue(getArray) {
    return getArray[1]
    
}
console.log(returnSecondValue(myNewArray)); // 400


// we can also pass array directly without using variable
console.log(returnSecondValue([200,400,600])); // 400