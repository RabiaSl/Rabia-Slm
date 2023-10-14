// arrays
const myArr = [0, 1, 2, 3, 4, 5] // array can be numbers, string or mixed as well
console.log(myArr[0]); // 0 /// array indexing starts with 0 (0 based indexing) and make shallow copies( means property share the same reference point that's mean if some changes happen it also happens in original array like heap) not deep copies

const myHeros = ["Prophet Muhammad", "Ibraheem"] //another way of array declaration

const myArr2 = new Array (1,2,3,4) // another way of array declaration here you give directly value not square brackets. square bracekt will be added auto amtically 
console.log(myArr[1]); // 2

//Array's methods

myArr.push(6)
console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]

myArr.pop()
console.log(myArr); // [0,1, 2,3, 4, 5] // last value would be ommited because of pop

myArr.unshift(9)
console.log(myArr); // [9, 0, 1, 2, 3,4, 5] // 9 insert in the start of array because of unshift which creates the problem in shifting values of array which can be problematic if values are large in numbers which would be time consuming

myArr.shift()
console.log(myArr); // [0, 1, 2,3 ,4 ,5] // remove the 9 fro array's list

console.log(myArr.includes(9)); // false // means 9 is inlcuded in array's list or not
console.log(myArr. indexOf(9)); // -1 // because 9 is not present in array's list but if you ask about the values which exist in array's list then it gives the index number 


const newArr = myArr.join()
console.log(myArr); // [0,1,2,3,4,5]
console.log(newArr); // 0,1,2,3,4,5 // although the values in both arrays  would be same but it changes the "type of"

console.log(typeof myArr);  //
console.log(typeof newArr); // string // 

// slice and splice

console.log("A", myArr); //  A [0,1,2,3,4,5]

const myn1 = myArr. slice(1, 3) 
console.log(myn1);// [ 1,2]
console.log("B", myArr); // B [0,1,2,3,4,5] // it returns the piece of array without affecting the original array


const myn2 = myArr.splice(1,3)
console.log(myn2); // [1,2,3] 
console.log("C", myArr);// [0,4,5] // whereas splice changes the original array while removing or replacing or adding values and affecting the orginal values



