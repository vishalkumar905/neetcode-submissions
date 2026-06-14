class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const values = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (values[num]) {
                values[num] += 1;
                return true;
            } else {
                values[num] = 1;            
            }
        }

        return false;
    }
}
