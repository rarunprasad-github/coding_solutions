class Solution {
  productExceptSelf(nums) {
    const N = nums.length;
    const prefixSum = Array(N);
    const suffixSum = Array(N);
    prefixSum[0] = 1;
    suffixSum[N - 1] = 1; 
    for (let i =1 ; i < N; i++) {
      prefixSum[i] = prefixSum[i-1] * nums[i-1];
      suffixSum[N - i - 1] = suffixSum[N - i] * nums[N-i];
    }
    const result = Array(N);
    for (let i = 0; i < N; i++) {
      result[i] = prefixSum[i] * suffixSum[i];
    }
    return result;
  }
}

const solution = new Solution();
console.log(solution.productExceptSelf([1,2,3,4]));