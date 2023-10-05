// primitive
// 7types : String, Number, Boolean, Null, Undefined, Symbol, bigInt

const score = "100" // string // type of= string
const scoreValue = 100.3 //  number// typeof = number
const isLoggedIn = false // boolean// typeof = boolean
const outSideTemp = null// typeof = object
let userEmail; // undeifned // typeof = undefined
let userEmail = undefined //
const id = Symbol ('123') // symbol  // typeof = symbol
const anotherId = Symbol ('123')
console.log(id === anotherId); //false
const bigNmber = 3343923050092090950n // // typeof = undefined

//Reference (Non primitive)
//Arrays, Objects, Functions
const heros = [
 
 "superman", "spiderman", " ironman", "batman"]
 let myObj = {  
  name: " Maria",
  age: "33",
    }

const myFunction = function(){console.log("Hello world");} // function//typeof = function
//------------------------------------------------------------------------------------------------

//Memory
//Stack( stack memory use in primitive type), Heap( heap memory use in non primitive type)

let myLectureName = "datatypesummary"
let anotherName = myLectureName 
anotherName ="newName"
console.log (myLectureName );// datatypessummary
console.log(anotherName); // newName
let userOne ={
 email:"user@google.com",
 upi: "user@ybl"
}
let userTwo = userOne
 
userTwo.email = "rabia@google.com"
console.log(userOne.email);// email change in both users( userOne and userTwo)
console.log(userTwo.email);








 

