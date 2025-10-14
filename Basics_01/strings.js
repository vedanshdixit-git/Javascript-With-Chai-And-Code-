const name = "Vedansh"
const repoCount = 1

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`)

const gameName=new String("Vedansh Dixit")//this method of defining a string provide different methods and length property 
console.log(typeof(gameName));

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(5));

console.log(gameName.indexOf('h'));
console.log(gameName.substring(0,8));

console.log(gameName.slice(-9,6));

const newString="    Vedansh Dixit Javascript       "
console.log(newString);
console.log(newString.trim());

console.log(gameName.includes("Vedansh"));

console.log(gameName.split(" "));
