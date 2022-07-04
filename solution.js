//#1
const parkWalkStr = "I can walk in the park all day!";

const p = parkWalkStr.indexOf("p");
const k = parkWalkStr.lastIndexOf("k");
console.log(parkWalkStr.substring(p, k + 1));

//#2

const helloStr = "Hello World";
console.log(helloStr.toUpperCase());

//#3

const earthlingsStr = "Hello Earthling";
console.log(earthlingsStr.toLowerCase());

//#4

const jsStr = "JavaScript";
lastIndexOfA = jsStr.lastIndexOf("a");

console.log(jsStr.substring(lastIndexOfA, lastIndexOfA + 3));

//#5
const niceShoesStr = "nice shoes";
console.log(
  "contains letter l",
  niceShoesStr.includes("l"),
  "container letter n",
  niceShoesStr.includes("n")
);

//#6
const oldStr = "boring";
const newStr = oldStr[0] + oldStr + oldStr[oldStr.length - 1];
console.log(newStr);

//#7
let scritcherStr = "Shikaki";

const lastThreeChars = scritcherStr.substring(scritcherStr.indexOf("a"));

console.log(lastThreeChars + scritcherStr + lastThreeChars);

//#8

let boogieNightsStr = "carpet";

// let cTot = boogieNightsStr.replace(
//   boogieNightsStr[0],
//   boogieNightsStr[boogieNightsStr.length - 1]
// );

// console.log("this is cTot:", cTot);

// console.log(cTot.replace("cTot.slice(-1)", "boogieNightsStr[0]"));

let firstLetter = boogieNightsStr[0];
let lastLetter = boogieNightsStr[boogieNightsStr.length - 1];

let middelLetters = boogieNightsStr.slice(1, 5);
console.log(lastLetter + middelLetters + firstLetter);

//#9

const firstName = "Ezekiel";
const city = "Asmara";
const job = "Programmer";

console.log(`I am ${firstName}. I live in ${city} and I am a ${job}`);

//#10
const foxStr = "the quick brown fox";
const firstFoxStrLetter = foxStr[0].toUpperCase();
const restOfTheLetters = foxStr.slice(1);
console.log(firstFoxStrLetter + restOfTheLetters);
