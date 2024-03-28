// 1) Assignment operator (=).

let age = 15;
age += 3;

let myName = "Sana";
myName += "Memon";

console.log(age, myName);

// Result
// 18 SanaMemon

// 2) Camparison operators

let weight: number = 40;
let age2: number = 19;

console.log(weight != age2); // True
console.log(weight === age2); // False
console.log(weight >= age2); // True
console.log(weight < age2); // False
console.log(weight, age2); // 40 19
console.log(weight || age2); // 40

// 3) Logical Operators

var pin = 1234;
var pin2 = 2004;
console.log(pin === pin2 && pin != pin2); // false
console.log(pin < pin2 && pin < pin2); // True

console.log(pin === pin2 || pin != pin2); // True
console.log(pin === pin2 || pin > pin2); // false

console.log(!(pin == pin2)); // True
console.log(!(pin < pin2)); // False

// 4) Logical Statements

const food = "Pizza";
if (food === "Pizza") {
  console.log("I will go to eat pizza"); // Result
} else {
  console.log("I dont want to eat anything else");
}
