function sortedFrequency(arr, val){
  let low = 0;
  let high = arr.length - 1;
  let mid;
  
  let startOfVal;
  let endOfVal;
  
  while(true) {
      mid = Math.floor((high + low) / 2);
      if(arr[mid] === val) {
          if(arr[mid - 1] === val) {
              high = mid -1;
          }
          if(arr[mid - 1] !== val) {
              startOfVal = mid - 1;
              break;
          }
      } else {
          if(arr[mid + 1] !== val) {
              low = mid + 1;
          }
          if(arr[mid + 1] === val) {
              startOfVal = mid + 1;
              break;
          }
      }
  }
  console.log(startOfVal, high, low);
  
  low = 0;
  high = arr.length - 1;
  while(true) {
      mid = Math.floor((high + low) / 2);
    //   if(arr[mid] !== val) {
    //       endOfVal = mid;
    //   }
      if(arr[mid] === val) {
          if(arr[mid + 1] === val) {
              low = mid + 1;
          }
          if(arr[mid + 1] !== val) {
              endOfVal = mid + 1;
              break;
          }
      } else {
          if(arr[mid - 1] !== val) {
              high = mid - 1;
          }
          if(arr[mid - 1] === val) {
              endOfVal = mid - 1;
              break;
          }
      }
  }
  return endOfVal - startOfVal;
}

console.log(sortedFrequency([1,1,2,2,2,2,3], 2));
console.log(sortedFrequency([1,1,2,2,2,2,3], 3));