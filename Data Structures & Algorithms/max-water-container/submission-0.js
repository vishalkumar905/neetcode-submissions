class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;

        let maxArea = 0;

        while (left < right) {
            const leftNum = heights[left];
            const rightNum = heights[right];

            const height = Math.min(leftNum, rightNum);
            const width = right - left;
            const area = width * height;

            if (maxArea < area) {
                maxArea = area;
            }

            if (leftNum < rightNum) {
                ++left;
            } else {
                --right;
            }
        }

        return maxArea;
    }
}
