class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        const used = new Array(nums.length).fill(false);

        function backtrack(current) {
            // We have created a complete permutation
            if (current.length === nums.length) {
                result.push([...current]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                // Skip if already used
                if (used[i]) {
                    continue;
                }

                // Choose
                current.push(nums[i]);
                used[i] = true;

                // Explore
                backtrack(current);

                // Undo / Backtrack
                current.pop();
                used[i] = false;
            }
        }

        backtrack([]);

        return result;
    }
}
