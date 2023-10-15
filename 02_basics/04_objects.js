// singleton

const meetingUser = new Object ()
console.log(meetingUser); // {} // singleton

const meetingUser = {}
console.log(meetingUser); // {} // literal// non singleton object


meetingUser.id = "123abc"
meetingUser. name = "Samy"
meetingUser.isLoggedIn = false
console.log(meetingUser); // { id: '123abc', name: 'Samy', isLoggedIn: false}

   ///nesting object inside object

const regularUser = {

    email: "some@gmail.com"
    fullname:{

        usefullname:{
            firstname : "Ayehsa",
            lastname: "Ali"
            
        }
    }
}

console.log(regularUser.fullname); // {userfullname:{firstname: 'Ayesha',lastname: 'Ali'}}
console.log(regularUser.fullname.usefullname); // {firstname: 'Ayesha',lastname: 'Ali'}
console.log(regularUser.fullname.usefullname.firstname); // Ayesha

// merge 2 objects

const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"a", 4:"b"}
const obj3 ={obj1,obj2} 
console.log(obj3); // {obj1:{'1':'a', '2':'b'}, obj2:{'3':'a', '4':'b'}} // objject would be appear inside the object as an element

const obj3 = Object.assign({}, obj1, obj2) // merge object
console.log(obj3); // {'1':'a', '2':'b','3':'a', '4':'b'} // all values would be combine in one object because blank curley brakets behaves like target object and all other values would behaves like a source object which would merge inside target object which is blank curly braket 

const obj3 = {...obj1, ...obj2}
console.log(obj3); // {'1':'a', '2':'b','3':'a', '4':'b'} // most used method of merging objects


// when value comes from data base it comes in form of array

const users = [

    {
        id: 1,
        email:"h@gamil.com"
    }
]

users[0].email
console.log(meetingUser); // { id: '123abc', name :'Samy', isLoggedIn : false}
console.log(Object.keys(meetingUser)); // sometimes we need to use this type of method // [ 'id', 'name', 'isLoggedIn'] // datatype of this is array
console.log(Object.values(meetingUser)); // [ '123abc', 'Samy',false]
console.log(Object.entries(meetingUser)); // [['id', '123abc'], ['name' 'Samy'], ['isLoggedIn', false]]
  

// ask if you have value
console.log(meetingUser. hasOwnProperty('isLoggedIn')); // true