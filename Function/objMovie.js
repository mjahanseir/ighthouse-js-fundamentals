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

  console.log(sum(10));
  function sum(limit){
    let sum =0;

    for(let i=0; i<=limit; i++)
      if(i%3===0 || i%5===0)
       sum+=i;
    

    return sum;
  }