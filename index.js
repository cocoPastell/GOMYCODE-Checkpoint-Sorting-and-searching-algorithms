function insertionSort(testArray) {
  let arr = testArray;
  for (let i = 1; i < arr.length; i++) {
    let currentPosition = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentPosition) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentPosition;
  }
  return arr;
}

testArray = [4, 7, 1, 3, 9, 6];
let arr = insertionSort(testArray);
console.log(arr);
