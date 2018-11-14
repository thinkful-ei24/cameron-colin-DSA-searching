export default function linearSearch(num, array) {
  for(let i=0; i<array.length; i++){
    if(num === array[i]){
      return `Found in ${i+1} ticks`;
    }
  }
  return 'Not found';
}

// console.log(linearSearch(0,[89, 30, 25, 32, 72]));