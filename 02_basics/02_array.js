const marvel_heros = [ "spiderman", "Ironman" ]
const dc_heros = ["superman", "batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros); // ["spiderman", "Ironman",["superman", "batman"]]  //second array behaves like an elemnet in this istuation

console.log(marvel_heros[3][1]); // superman because third element itself was an array and first value of third element is superman. this is not a good approach of writing syntax

const allHeros = marvel_heros. concat(dc_heros)
console.log(allHeros);//["spiderman", "Ironman",["superman", "batman"]]// concat return the same like push. there is one more thing to notice that push basically push value on existing array however concate returns a new arrray


const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // ["spiderman", "Ironman","superman", "batman"]



const another_array = [1,2,3, [4,5,6],7, [6,7,[4,5]]]
const real_another_array = another_array.flat[Infinity] // [1,2,3,4,5,6,7,6,7,4,5]



console.log(Array.isArray("Rabia")); // false // to ask data if it is array or not 

console.log(Array.from("Rabia")); // [ "R", "a", "b", "i", "a"] convert to array
console.log(Array.from({name:"rabia"})); // [] because it is not converting this information so thats why user has to mention which part of information should be converted into array for example in this case values or keys which should be used to make an array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // ;[ 100, 200, 300]

