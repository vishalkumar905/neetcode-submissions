class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);

        const result = [];
        const subset = [];

        function backtrack(start) {
            result.push([...subset]);

            for (let i = start; i < nums.length; i++) {
                // Skip duplicate numbers at the same recursion level
                if (i > start && nums[i] === nums[i - 1]) {
                    continue;
                }

                subset.push(nums[i]);

                backtrack(i + 1);

                subset.pop();
            }
        }

        backtrack(0);

        return result;
    }
}
