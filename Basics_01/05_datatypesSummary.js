// Primitive 

// 7 types : String ,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('12')
const anotherId=Symbol('12')

// Reference (Non primitive)

// Array,Object,Functions

const Heros=["Hanuman","Shaktiman","doga"]

console.log(typeof Heros);

let myfunc = function(){
    console.log("Hello Vedansh");
};

console.log(typeof myfunc);

let myObject = {
    name:"Vedansh",
    age: 19,
    year: 2
}

console.log(typeof myObject);
