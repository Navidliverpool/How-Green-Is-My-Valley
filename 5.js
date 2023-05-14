function test(arr){
    let sorting = (numArray) => {
        return numArray.sort(function (a, b) {
          return a - b;
        });
      };
return sorting(arr)
}
console.log(test([36, 79, 32, 54, 19, 35]));
function test2(arr){
    let sorting = (numArray) => {
        return numArray.sort(function (a, b) {
          return b - a;
        });
      };
return sorting(arr)
}
console.log(test2([36, 79, 32, 54, 19, 35]));
