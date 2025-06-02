class Solution {
  /**
   *  
   * @param {*} ratings 
   * @returns 
   */
  candy(ratings) {
    const n = ratings.length;
    const candies = Array(n).fill(1);
    
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }
    console.log('Final distribution:', candies);
    return candies.reduce((sum, candy) => sum + candy, 0);
  }
}

const solution = new Solution();
console.log(solution.candy([1,0,2]));
console.log(solution.candy([1,2,2]));