
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};


function movies(messageFunction, name) {
  messageFunction(name);
}

movies(favoriteMovie, "Finding Nemo");

//inline function
movies(
  function displayFavorite(movieName) {
      console.log("My other movie is "+ movieName);
      },
  "searching Nemo"

);
