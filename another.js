if ("") {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}
Returns: "the value is falsy"
//another
var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);
//while Loops
var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}
//inline function
function m(g , h){
g(h)
}
m(function j(k){
console.log( "my" , k);
} , "fuck")
