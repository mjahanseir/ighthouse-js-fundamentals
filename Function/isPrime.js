showStars(10);
function showStars(rows){
  for(let i=1; i<=rows ;i++) {
    let pattern='';
    for(let j=0; j<i;j++)
    pattern+='*';
       console.log(pattern);
  }
}


showPrime(20);
function showPrime(limit){
  for(let number=2; number<limit;number++){
    
    let isPrime=true;
    for(let factor=2; factor<number;factor++){
      if(number%factor===0){
        isPrime=false;
        break;
      }
  }

  if(isPrime)
  console.log(number);
}
}
