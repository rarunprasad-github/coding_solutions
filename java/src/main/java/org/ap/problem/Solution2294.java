package org.ap.problem;

// Problem link - https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/description/?envType=daily-question&envId=2025-06-19

import java.util.Arrays;

public class Solution2294 {
    public int partitionArray(int[] nums, int k) {
        int[] sorted = nums.clone();
        Arrays.sort(sorted);

        int leftPointer = 0;
        int rightPointer = 1;
        int result = 1;

        while (rightPointer < nums.length) {
            if (sorted[rightPointer] - sorted[leftPointer] > k) {
                result++;
                leftPointer = rightPointer;
                rightPointer = leftPointer + 1;
            } else {
                rightPointer++;
            }
        }

        return result;
    }
}
