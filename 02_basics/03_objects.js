// objects
// there are two ways to declare objects in js. one is literal and other is constructor.
//if we declare object in literal then singleton does not form however singelton forms when objects declare in constructor way.
// objects literals
Object. create //(cosntructor method ) // singelton

const mySym = Symbol("key1") //take one symbol, defines it and then acts like a key in object and then print
const JsUser = {
    [mySym]: "mykey1",
    name : "Ayesha", // keys and values are used in object
    "full Name" : "Ayesha Mini",
    age : 18,
    location : france,
    email: ayesha.google.com,
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"] 
    
} // (literal method) //

// how to access objects there are 2 ways

console.log(JsUser.email); // this is not appropriate way
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);
console.log( typeof JsUser.mySym); // instead of symbol it behaves like a string because  by using dot it does not work properly so thast why we have to put brackets
console.log(JsUser[mySym]); // mykey1, typeof symbol
console.log(JsUser[mySym]);

JsUser. email = "ayesha.chat@gmail.com" //  override values
 Objects. freeze (JsUser) // if user wants to block the values so noone can change it in future
 console.log(JsUser); // ayesha.chat@gmail.com

 // function

 JsUser.greetings = function () {
    console.log("Hello JS user");
} 
console.log(JsUser.greetings()); // Hello Js user

JsUser.greetingsTwo = function() {
    console.log(`Hello Js user, ${ this.name}`); // Hello Js user , Ayesha
}
