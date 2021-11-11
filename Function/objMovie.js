const movie={
    title:'a',
    year:2015,
    rating:4.5,
    director:'gholi'
  };

showProperties(movie);
  
  function showProperties(obj){
    for(let value in obj){
    if(typeof obj[value]==='string')
    console.log(value, obj[value]);
    }
  }
