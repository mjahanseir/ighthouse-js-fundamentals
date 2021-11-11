

console.log("******** Same name in once definition **********");

var bookTitle = "Global variable";
console.log(bookTitle);

function displayBook() {
   bookTitle = "Local variable";
  console.log(bookTitle);
}

displayBook();
console.log(bookTitle);


console.log("******** When Var Defined **********");


var bookTitle2 = "Global variable";
console.log(bookTitle2);

function displayBook2() {
  var bookTitle2 = "Local variable";
  console.log(bookTitle2);
}

displayBook2();
console.log(bookTitle2);