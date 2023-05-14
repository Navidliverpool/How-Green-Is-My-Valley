// makeValley function does the job.
function makeValley(arr) {
  let res = [];
  let res2 = [];
  let pivot = Math.ceil(arr.length / 2);
  for (let i = 0; i < pivot; i++) {
    res.push(arr[i]);
  }
  console.log("res:", res);
  let reverseSorting = (numArray) => {
    return numArray.sort(function (a, b) {
      return b - a;
    });
  };
  let leftSideArr = reverseSorting(res);
  console.log("leftSideArr:", leftSideArr);
  let leftSideArrAttachedToPivot = leftSideArr.concat(arr[pivot]);
  console.log("leftSideArrAttachedToPivot:", leftSideArrAttachedToPivot);
  for (let i = pivot + 1; i < arr.length; i++) {
    res2.push(arr[i]);
  }
  let sorting = (numArray) => {
    return numArray.sort(function (a, b) {
      return a - b;
    });
  };
  let rightSideArr = sorting(res2);
  let result = leftSideArrAttachedToPivot.concat(rightSideArr);
  console.log("result:", result);
return result
}
console.log(makeValley([ 17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1 ]));
