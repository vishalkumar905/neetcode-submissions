class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0;
        let high = nums.length - 1;

        while (low < high) {
            let mid = Math.floor((low + high) / 2);

            if (nums[mid] > nums[high]) {
                // Minimum is in the right half
                low = mid + 1;
            } else {
                // Minimum is at mid or in the left half
                high = mid;
            }
        }

        return nums[low];
    }
}
