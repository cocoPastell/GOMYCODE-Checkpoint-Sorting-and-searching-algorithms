function insertionSort(testArray) {
  let arr = testArray;

  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (arr[i] > arr[j]) {
      let a = 0;
      a = arr[i];
      arr[i] = arr[j];
      arr[j] = a;
      i--;
      j--;
    }
  }
  return arr;
}

testArray = [4, 7, 1, 3, 9, 6, 5, 8, 2, 0, -8];
let arr = insertionSort(testArray);
console.log(arr);
