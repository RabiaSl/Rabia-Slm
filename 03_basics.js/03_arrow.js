const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`)
    console.log(this); // describe current context
  }  
}
user.welcomeMessage() // hitesh, welcome to website
user.username = "sam"
user.welcomeMessage() // sam, welcome to website // because context has changed as we used this method.

console.log(this); // current context {} because we are in the node environment 


// Arrow function



function chai (){

  let username = "hitesh"
  console.log(this.username); // undefined // we are unable to use this in function
} // we are getting lot of values when we are using this inside function

const chai = function () {
  let username = "hitesh"
  console.log(this.username); // undefined 
}
chai()
const chai = function () {
  let username = "hitesh"
  console.log(this.username); // undefined 
}
chai()

const chai = () => {
  let username = "hitesh"
  console.log(this.username); 
} // undefined
chai()

const chai = () => {
  let username = "hitesh"
  console.log(this); 
} // {} // 

chai()

// Arrow Function
 explicit return
const addTwo(num1, num2) => {
   retun num1 + num2
 }
console.log(addTwo (3,4)) // 7

// implicitreturn return

const addTwo(num1, num2) => (num1 + num2)
console.log(addTwo (3,4)) // 7

// if we return object then 

const addTwo(num1, num2) => {username:"hitesh"} // if we dont put () then undefined because we cannot return object without parathenthis
console.log(addTwo (3,4)) // 


const addTwo(num1, num2) => ({username:"hitesh"}) // 
console.log(addTwo (3,4)) // 

const myArray = [2,3,4,5]
myArray.forEach () => ()
