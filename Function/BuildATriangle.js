

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}


function buildTriangle(width) {

  var triangle = "";
  var lineNumber = 1;
  for (lineNumber = 1; lineNumber <= width; lineNumber++) {
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
  
}

function buildTriangle2(length){
  let str = '';
  for (var i = 1; i <= length; i++){
    for (var j = 0; j < i; j++) {
      str+='* '
    }
    str+= "\n"
  }
  return str;
}


console.log(buildTriangle(10));
console.log(buildTriangle2(10));