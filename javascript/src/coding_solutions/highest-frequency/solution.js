class Solution {
  mostFrequentElement(nums) {
    const numberMap = new Map();
    let maxCount = 0;
    let highestOccurring = nums[0];
    nums.forEach((num) => {
      const currentCount = numberMap.get(num) || 0;
      if (currentCount > 0) {
        numberMap.set(num, currentCount + 1);
      } else {
        numberMap.set(num, 1);
      }
      if (currentCount + 1 > maxCount) {
        maxCount = currentCount + 1;
        highestOccurring = num;
      } else if (currentCount + 1 === maxCount && num < highestOccurring) {
        highestOccurring = num;
      }
    });
    return highestOccurring;
  }
}

const solution = new Solution();
console.log(solution.mostFrequentElement([1,2,2,3,3,4,4]));