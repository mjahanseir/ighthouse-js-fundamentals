
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];


function hasEnoughPlayers(input){
 
  if (input.length >= 7)
    return true;
  return false;
}
console.log(hasEnoughPlayers(team));
