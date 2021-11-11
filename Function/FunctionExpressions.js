

// var catSays = function(max) {
//   var catMessage = "";
//   for (var i = 0; i < max; i++) {
//     catMessage += "meow ";
//   }
//   return catMessage;
// };


function cat() {
  function purr() {
    return "purrr!"
  }
  console.log(purr());
  var meow = function (max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  }
}
cat();

