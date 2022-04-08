/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

var maxProfit = function (prices) {
  // create variable cheapestPrice and assign +Infinity
  // create variable maxProfit and assign 0
  // iterate through the prices array
  // if the current element is less than cheapestPrice
  // assign cheapestPrice to be prices[i]
  // else (the price is greater than cheapest, we find the maxProfit)
  // assign maxProfit to be equal to when compared with curr maxProfit and prices[i] - cheapest

  let cheapestPrice = +Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < cheapestPrice) {
      cheapestPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - cheapestPrice);
    }
  }
  return maxProfit;
};

// const maxProfit = (prices) => {
//   let lowestMin = +Infinity;
//   let profit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < lowestMin) {
//       lowestMin = prices[i];
//     } else if (prices[i] - lowestMin > profit) {
//       profit = prices[i] - lowestMin;
//     }
//   }
//   return profit;
// };

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
