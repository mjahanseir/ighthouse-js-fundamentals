var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];

console.log(donuts);


console.log("*****************");

donuts.splice(1, 1, "chocolate cruller", "creme de leche");

console.log('splice(1, 1, "chocolate cruller", "creme de leche") \n');

console.log(donuts);

console.log("*****************");


console.log("splice( Starting index , count how many element to be remove , ITEM1 add to list, ITEM2 add to list, ...  )");

console.log("*****************");

var don = ["cookies", "cinnamon sugar", "creme de leche"];
console.log(don);

don.splice(-2, 0, "chocolate frosted", "glazed");
console.log(don);
