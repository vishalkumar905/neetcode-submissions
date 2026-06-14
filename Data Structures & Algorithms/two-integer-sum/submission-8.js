class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            const need = target - nums[i];
            if (need in map) {
                return [map[need], i];
            }

            map[nums[i]] = i;
        }

    }
}
