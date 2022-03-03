/*
Difficulty - Easy
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

const maxSubArray = (nums) => {
  let currSum = 0;
  let maxSum = nums[0];

  for(let i = 0; i < nums.length; i++) {
    if(currSum < 0) {
      currSum = 0;
    }
    currSum += nums[i];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}


/* 
****INDEPTH NOTE ABOUT maxSubArray****
const maxSubArray = (nums) => {
  // we need currSum to check for two things, whether the previous sums go below zero(negative)
  // or if positive, see if it is greater than maxSum check later
  let currSum = 0;
  // we need maxSum to remember the highest number it records, it will always be compared with currSum
  // to see if currSum exceeds the maxSum
  let maxSum = nums[0];


  for (let i = 0; i < nums.length; i++) {
    // currSum accumulates numbers in the array and if it ever goes negative,
    // we start over since maxSum operation at the end records the highest number everytime
    if (currSum < 0) {
      // reset to 0
      currSum = 0;
    }
    // add current number to currSum
    currSum += nums[i];
    // record the highest between maxSum and currSum
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};
*/

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));

