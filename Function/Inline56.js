

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}


emotions ("happy", function(num) {
  var str = ""; 

  for (var i = 0 ; i < num ; i++) {
      str += "ha" ;  
  }
  str += "!"; 
  return str; 
});
