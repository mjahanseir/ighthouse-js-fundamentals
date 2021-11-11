/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()` function inside `console.log()`
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


let laughStr = '';
function laugh(num) {
  for (let i = 0; i <= num; i++)
    laughStr += "ha";
  laughStr += "!";
  return laughStr;
}

console.log(laughStr(3));
console.log(laughStr(7));
