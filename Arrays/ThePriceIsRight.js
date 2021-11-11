
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
for (var index = 0; index<prices.length; index++){
  if(index===0)
      prices[index]=22;
 
  else if(index===2)
      prices[index]=44;
  
  else if(index===6)
      prices[index]=88;
  
}
console.log(prices);
