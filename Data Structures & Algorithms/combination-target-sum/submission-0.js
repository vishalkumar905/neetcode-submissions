class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        function backtrack(index, target, current) {
            // We found a valid combination
            if (target === 0) {
                result.push([...current]);
                return;
            }

            // No more numbers to consider
            if (index === nums.length) {
                return;
            }

            // Choice 1: TAKE nums[index]
            if (nums[index] <= target) {
                current.push(nums[index]);

                // Same index because we can reuse the number
                backtrack(index, target - nums[index], current);

                // Undo the choice
                current.pop();
            }

            // Choice 2: SKIP nums[index]
            backtrack(index + 1, target, current);
        }

        backtrack(0, target, []);

        return result;
    }
}
