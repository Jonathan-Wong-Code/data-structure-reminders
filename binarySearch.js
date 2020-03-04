const binarySearch = (list, item) => {
  let max = list.length - 1;
  let min = 0;
  var guess;
  while (min <= max) {
    guess = Math.floor((max + min) / 2);

    if (item === list[guess]) {
      return guess;
    } else {
      if (list[guess] > item) {
        max = guess + 1;
      } else {
        min = guess - 1;
      }
    }
  }

  return -1;
};

const array = [1, 2, 5, 7, 10, 15, 20, 30, 31];
const answer = binarySearch(array, 15);

console.log(answer);
