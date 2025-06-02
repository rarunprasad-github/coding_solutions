class Solution {
  removeDuplicates(nums) {
    if (nums.length <= 2) {
      return nums.length;
    }

    let k = 2;

    for (let i = 2; i < nums.length; i++) {
      console.log(i, k, k-2);
      if (nums[i] != nums[k - 2]) {
        nums[k] = nums[i];
        k++;
      }
    }

    return k;
  }
}

const solution = new Solution();
solution.removeDuplicates([1, 1, 1, 2, 2, 3]);