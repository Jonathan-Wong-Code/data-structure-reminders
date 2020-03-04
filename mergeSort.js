// How to merge two sorted arrays.
const arrayOne = [1, 2, 5, 10, 11, 20];
const arrayTwo = [6, 7, 9, 15];

function merge(arrayOne, arrayTwo) {
  const finalArray = [];
  let i = 0;
  let j = 0;

  while (i < arrayOne.length && j < arrayTwo.length) {
    // If arrayOne is larger push from array two
    if (arrayOne[i] > arrayTwo[j]) {
      finalArray.push(arrayTwo[j]);
      j++;
    } else {
      finalArray.push(arrayOne[i]);
      i++;
    }
  }

  while (i < arrayOne.length) {
    finalArray.push(arrayOne[i]);
    i++;
  }

  while (j < arrayTwo.length) {
    finalArray.push(arrayTwo[j]);
    j++;
  }

  return finalArray;
}

console.log(merge(arrayOne, arrayTwo));

const mergeSort = array => {
  if (array.length < 2) return array;
  const midpoint = Math.floor(array.length / 2);
  const leftSide = array.slice(0, midpoint);
  const rightSide = array.slice(midpoint);
  const leftArray = mergeSort(leftSide);
  const rightArray = mergeSort(rightSide);
  return merge(leftArray, rightArray);
};

console.log(mergeSort([1, 4, 12, 3, 5, 10, 20]));
