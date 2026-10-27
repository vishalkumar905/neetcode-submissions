class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const totalSum = nums.reduce((sum, num) => sum + num, 0);

        // If the total sum is odd, equal partition is impossible
        if (totalSum % 2 !== 0) {
            return false;
        }

        const target = totalSum / 2;

        // dp[i] indicates whether sum i can be achieved
        const dp = new Array(target + 1).fill(false);

        // A sum of 0 is always possible using an empty subset
        dp[0] = true;

        for (const num of nums) {
            // Iterate backwards to avoid using the same number multiple times
            for (let sum = target; sum >= num; sum--) {
                dp[sum] = dp[sum] || dp[sum - num];
            }

            // If we can already achieve the target, return true
            if (dp[target]) {
                return true;
            }
        }

        return dp[target];
    }
}
