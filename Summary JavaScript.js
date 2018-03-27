alert("hello");
//comment
/* comment
two */
string console.log{"string is here"}
//sring index
var name = "james";
name[0];
return: "j"
//Escaping Strings
"The man whispered, \"please speak to me.\""
/*  \\	\ (backslash)
    \"	'' (double quote)
    \'	' (single quote)
    \n	newline
    \t	tab                  */
// Comparing Strings
"Yes" == "yes"
//Booleans true or false
// Null, Undefined, and NaN
null value of nothing (var x = null)
Undefined doesnot have value(var x)
NaN = "Not-A-Number" like "hello"/5
//Conditionals
//else if statements
var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}
(&& and || or) on logical operators
/* Here’s the list of all of the falsy values:
false Null undefined 0 "" NAN */
// Ternary Operator
var isGoing = true;
var color;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}

console.log(color);


var eatsPlants = false;
var eatsAnimals = false;

var category = (eatsPlants && eatsAnimals ? "omnivore"
: eatsPlants ? "herbivore"
: eatsAnimals ? "carnivore"
: "undefined")

console.log(category);
//switch
var option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break;
var option = 3;
//another
var tier = "none";
var output = "You’ll receive ";

switch (tier) {
  ...
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);
//Loops
for(var x = 0; x <= 25; x++){
    for(var y = 0; y <= 99; y++){
        console.log(x + "-" + y)
    }
}

//Reverse Function Example
function back(x){
var y = "";
for (var i = x.length - 1 ; i >= 0 ; i--){

	y += x[i];
}
 return y;
}
console.log(back("ahmed"));
demha
// function isprime
function isprime(integer){
  for(var x = 1 ; x <= integer ; x++){
    if(integer % x === 0){
      console.log(integer + " is divisible by " + x);
      return false;
    }
  }
  return true;
}
//return
if it was two return it is return first one
//scope
global scope
function scope
//Shadowing
same var assign as global but it's not
add var before it to prevent it
// hoisting
JavaScript hoists function declarations and variable
 declarations to the top of the current scope.
Variable assignments are not hoisted.
Declare functions and variables at the top of your
 scripts, so the syntax and behavior are consistent
  with each other.
  //Quiz: Build a Triangle (5-3)
  function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
//another
function buildTriangle(num){
for (var x = 1 ; x <= num; x++){
 var he = "";
	for (var y = 1; y <= x; y++){
	he += "$ ";
}
console.log(he + "\n");
}
}
console.log(buildTriangle(10))
//Inline function expressions
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};
//Function Expressions
//Patterns with Function Expressions
// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}
// pass in catSays as a callback function
helloCat(catSays);
*in function expression u should omly called it with name on first if u add function name u canot call it with it
//Quiz: Inline (5-6)
function emotions(myString) {
    console.log("I am " + myString + ", " + myFunc(2));
}

var myFunc = function emotions(num){
    var gh = "";
    for (var x = 1 ; x <= num ; x++){
        gh += "ha";
    }
    return gh + "!";}
   emotions ( "happy" , myFunc  )
   //arrays
length
var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts.length);
push
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
donuts.push("powdered");
pop
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];
donuts.pop();
splice
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche");
// removes "chocolate frosted" at index 1 and adds
// "chocolate cruller" and "creme de leche"
 //starting at index 1

 //Array Loops
 var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
//for Loops
var x = [1, 2, 3, 4, 5];
for(var i = 0; i <= x.lenght; i += 2){
  console.log(x[i]);
  if (i === 20){
    break;
  }
}
//foreach
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});
//another
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});
//another
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];
test.forEach(function(num ,index){
    if (num % 3 === 0){
        test[index] += 100;
        console.log(test);}
})
//map
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

//arrays in arrays
var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];
for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}

// objects
typeof "hello" // returns "string"
typeof true // returns "boolean"
typeof [1, 2, 3] // returns "object" (Arrays are a type of object)
typeof function hello() { } // returns "function"
var sister = {
 name: "Sarah",
 age: 23,
 parents: [ "alice", "andy" ],
 siblings: ["julia"],
 favoriteColor: "purple",
 pets: true
};


var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

sister.paintPicture();


//another
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};

//another

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut) {
var str = donut.type + " donuts cost $" + donut.cost + " each"
console.log(str)
})
//final
var facebookProfile = {
    name: "Ahmed",
    friends: 4,
    messages: ["hello" , "hi", "welcome", "hey"],
    postMessage: function(x){
      return  facebookProfile.messages.push(x);
    },
    deleteMessage: function(w){
       return  facebookProfile.messages.pop(x);
    },
    addFriend: function(y){
       facebookProfile.friends =  facebookProfile.friends + y;
       return facebookProfile.friends;
    },
    removeFriend: function(y){
        return facebookProfile.friends - y;
    },
};
// some good question
// first non
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

if(((flavor === "vanilla") || (flavor === "chocolate")) &&
((vessel === "cone") || (vessel === "bowl")) &&
((toppings === "sprinkles") || (toppings === "peanuts"))){

console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".")
}
// second one
var education = "a Doctoral degree";
var salary;

switch(education){
    case "no high school diploma":
        salary = 25,636 ;
        break;
    case "a high school diploma":
        salary = 35,256 ;
        break;
    case "an Associate's degree":
        salary = 41,496;
        break;
    case "a Bachelor's degree":
        salary = 59,124;
        break;
    case "a Master's degree":
        salary = 69,732;
        break;
    case "a Professional degree":
        salary = 89,960;
        break;
    case "a Doctoral degree":
        salary = 84,396;
        break;
}
console.log("In 2015, a person with " + education + " earned an average of " + "$" + salary.toLocaleString("en-US") + "/year.");
 //thried one
 var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}
