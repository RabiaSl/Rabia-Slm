// Global scope

let a = 10
const b = 20
var c = 30
 
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// blcok scope( written inside brackets)


if (true){
let a = 10
const b = 20
var c = 30
  } // a is not defined similarly b is also not defined because i did not return them. however c is 30 which creates the problem because it should not appeared thats why using var is not a god practice. the values which we write outside should be appear but values inside the brackets should not appear outside 

if (true){
let a = 10
const b = 20
console.log("INNER:  ", a)
}  // 300 when we are inside if equation then we use block scope's values but if we come outside then we use glocal scope values-


// if you say print console inside block scope then we write then it appears INNER : 10 which is inside block's scope


// Nested Scope

function one(){
  const username = "hitesh"
  function two(){
  const website = "youtube"
  console.log(username); // i want to see if i can access the username from parent while presenting in block scope
  }
  
console.log(website);  // website is not defined because the scope is inside the block because it execute line by line thast why two() is also giving error as website is not defined but it we comment out the console.log(website); then two() would work
  
  
two() // hitesh // if we comment out two() then one () would not execute because two() did not call
  
}
one()  

// scope in if statement
 
if(true){
  const username = "hitesh"
  if(username==="hitesh"){
    const website = " youtube"
    console.log( username + youtube);  
  }
  console.log(website) // error because it is present in block scope // so if i commentout this line so error would be erased
}
console.log(username); // error would occur because it is present in parent' scope// but if i comment out the line then error would be erased 
// hitesh youtube



+++++++interesting concept 

// different ways of writing functions which bring different results

function addOne(num){
  return num + 1
}
addOne(5) 


const addTwo = function (num){

  return num + 2
}

addTwo(5)

/// if i take addOne bring before function's declaration

console.log(addOne(5)); // 6
function addOne(num){
  return num + 1
}

// but in this case if i write addTwo before function's declaration
  
  console.log(addTwo(5)); // error because in this case we are holding function in varaible which is called hoisting
const addTwo = function (num){
  return num + 2
}


