const sharePrice = [128, 97, 121, 123, 98, 97, 105];

function maxProfit(){
  let counter = 0;
  let maxProfit = sharePrice[1] - sharePrice[0];
  let min=sharePrice[0];
  for(let i=0; i<sharePrice.length; i++){
    let currentProfit = sharePrice[i] - min;
    if(currentProfit > maxProfit){
      maxProfit = currentProfit;
    }
    if(sharePrice[i]< min){
      min = sharePrice[i];
    }
  }return maxProfit;
}

console.log(maxProfit());

