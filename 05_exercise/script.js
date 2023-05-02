function getLastValue(arr) {
  const sortedArr = arr.sort();
  return sortedArr[sortedArr.length - 1];
}
const inputArr = ['Black', 'Red', 'White', 'Yellow', 'Zebra'];
const lastValue = getLastValue(inputArr);
console.log(lastValue);
