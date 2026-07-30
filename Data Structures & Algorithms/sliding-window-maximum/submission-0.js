class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deque = []; // stores indices
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            // Remove indices outside the current window
            while (deque.length && deque[0] <= i - k) {
                deque.shift();
            }

            // Remove smaller elements from the back
            while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
                deque.pop();
            }

            // Add current index
            deque.push(i);

            // Record maximum once the first window is complete
            if (i >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }
}
