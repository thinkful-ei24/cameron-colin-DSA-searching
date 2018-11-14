export default function binarySearch(num, array, start, end, counter) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length - 1 : end;
  counter = counter === undefined ? 0 : counter;

  if (start > end) {
    counter++;
    return 'item not found';
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index];

  //base case
  if(item === num){
    counter++;
    return `Found in ${counter} ticks`;
  }
  else if (item < num) {
    counter++;
    return binarySearch(num, array, index + 1, end, counter);
  }
  else if (item > num) {
    counter++;
    return binarySearch(num, array, start, index - 1, counter);
  }
}
