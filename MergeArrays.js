function merge(array1, array2) {

  let result = array1.concat(array2);

  for (let i = 0; i < result.length; i++){
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
   return result;
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);