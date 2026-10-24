
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxProduct = nums[0];
        let minProduct = nums[0];
        let result = nums[0];

        for (let i = 1; i < nums.length; i++) {
            let num = nums[i];

            // A negative number swaps max and min roles
            if (num < 0) {
                [maxProduct, minProduct] = [minProduct, maxProduct];
            }

            maxProduct = Math.max(num, maxProduct * num);
            minProduct = Math.min(num, minProduct * num);

            result = Math.max(result, maxProduct);
        }

        return result;
    }
}
