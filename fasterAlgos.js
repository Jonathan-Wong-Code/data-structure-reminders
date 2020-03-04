// *** Unique Sort or making sure properties are unique in an array **** //

const isUniqueSort = arr => {
  const sortedArray = [];
  const breadCrumbs = {};

  for (let i = 0; i < arr.length; i++) {
    if (!breadCrumbs[arr[i]]) {
      breadCrumbs[arr[i]] = true;
      sortedArray.push(arr[i]);
    }
  }

  return sortedArray.sort((a, b) => a - b);
};

console.log(isUniqueSort([1, 5, 6, 2, 1, 2, 2]));

// With BreadCrumbs we set an object where the key breadCrumbs[arr[i]] is set to the value of true.
// We can then check if that key has a value already.
