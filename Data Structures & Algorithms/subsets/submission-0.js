class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];

        function backtrack(start, current) {
            // Every state is a valid subset
            result.push([...current]);

            for (let i = start; i < nums.length; i++) {
                current.push(nums[i]);

                backtrack(i + 1, current);

                current.pop();
            }
        }

        backtrack(0, []);

        return result;
    }
}
