function makeValley(arr) {
    let res2 = [];
    let biggerstLeft = arr[0];
    let pivot = Math.ceil(arr.length / 2) + 1;
    console.log(pivot)
    for (let i = pivot -1; i >= 0 ; i--) {
      if (arr[i] < biggerstLeft) {
          biggerstLeft = arr[i] 
      }
      res2.push(biggerstLeft);
  }
  console.log(res2)
  res2.push(arr[pivot])
  let smaller = arr[pivot + 1]
  for (let i = pivot; i < arr.length; i++) {
      if (arr[i] < smaller) {
          smaller = arr[i] 
      }
      res2.push(smaller);
  }
    // return res2;
  }
  console.log(makeValley([35, 79, 32, 54, 19, 35]));
  