class Solution {
    findKthLargest(nums, k) {
        // kth largest = (nums.length - k)th smallest
        const target = nums.length - k;

        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const pivotIndex = this.partition(nums, left, right);

            if (pivotIndex === target) {
                return nums[pivotIndex];
            } else if (pivotIndex < target) {
                left = pivotIndex + 1;
            } else {
                right = pivotIndex - 1;
            }
        }

        return -1;
    }

    partition(nums, left, right) {
        const pivot = nums[right];
        let i = left;

        for (let j = left; j < right; j++) {
            if (nums[j] <= pivot) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
            }
        }

        [nums[i], nums[right]] = [nums[right], nums[i]];

        return i;
    }
}