class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob = function (nums) {
        const n = nums.length;

        if (n === 1) return nums[0];

        const robLinear = (start, end) => {
            let prev2 = 0;
            let prev1 = 0;

            for (let i = start; i <= end; i++) {
                const current = Math.max(prev1, nums[i] + prev2);

                prev2 = prev1;
                prev1 = current;
            }

            return prev1;
        };

        // Option 1: Exclude the last house
        const option1 = robLinear(0, n - 2);

        // Option 2: Exclude the first house
        const option2 = robLinear(1, n - 1);

        return Math.max(option1, option2);
    };
}
