
console.log("******** Same name in once definition **********");

var x = 1;

function addTwo() {
   x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);



console.log("******** When Var Defined **********");

var y = 1;

function add2() {
  var y = y + 2;
}

add2();
y = y + 1;
console.log(y);




