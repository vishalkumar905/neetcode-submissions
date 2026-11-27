class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const total = nums.reduce((sum, num) => sum + num, 0);

        // Impossible target
        if (Math.abs(target) > total) return 0;

        // Target must have the same parity as total
        if ((target + total) % 2 !== 0) return 0;

        const positive = (target + total) / 2;

        const dp = new Array(positive + 1).fill(0);
        dp[0] = 1;

        for (const num of nums) {
            for (let i = positive; i >= num; i--) {
                dp[i] += dp[i - num];
            }
        }

        return dp[positive];
    }
}
