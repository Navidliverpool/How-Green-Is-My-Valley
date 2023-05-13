function makeValley(arr) {
  let res = [];
  let pivot = Math.ceil(arr.length / 2) + 1;
  for (let i = 0; i < pivot; i++) {
    res.push(arr[i]);
  }
//   console.log(res);
  let sorting = (numArray) => {
    numArray.sort(function (a, b) {
      return a - b;
    });
    // I was getting undefined as the result and the reason was the sorting function was not returning any value explicitly.
    // The issue has been solved by adding "return numArray" line of code.
    // Another way of saying this is, adding the "return" key to "let sorting = (numArray) => {
    // return numArray.sort(function (a, b) {
    // return a - b;
    // });"
    // };
    return numArray;
  };
  let finalR1 = sorting(res);
let res2 = []
for (let i = pivot; i < arr.length; i++) {
    res2.push(arr[i]);
  }
let finalR2 = sorting(res2).reverse()
let f = finalR1.concat(finalR2)
  console.log(f);
}

console.log(makeValley([35, 79, 32, 54, 19, 35]));
