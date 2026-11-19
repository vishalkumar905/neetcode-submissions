class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length;

        const expectedSum = (n * (n + 1)) / 2;

        let actualSum = 0;

        for (let num of nums) {
            actualSum += num;
        }

        return expectedSum - actualSum;
    }
}
