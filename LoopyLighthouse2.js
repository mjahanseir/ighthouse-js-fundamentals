loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

function loopyLighthouse(range, multiples, words) {

  // let firstIndexArray = range[0];
  // let LastIndexArray = range[1];

  let firstIndexReplace = multiples[0];
  let secondIndexReplace = multiples[1];
  
  let firstStringReplace = words[0];
  let secondStringReplace = words[1];


  console.log(range.length)
  console.log(firstIndexReplace)
  console.log(secondIndexReplace)
  console.log(firstStringReplace)
  console.log(secondStringReplace)
  
  for (let i = range[0]; i <= range[1]  ; i++) {

    if (i % firstIndexReplace === 0 && i % secondIndexReplace === 0)
      console.log(firstStringReplace + secondStringReplace);
    else if (i % firstIndexReplace === 0)
      console.log(firstStringReplace);
    else if (i % secondIndexReplace === 0)
      console.log(secondStringReplace);
    else
      console.log(i);
  }


}




