class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalWater = 0;

        for (let i = 0; i < height.length; i++) {


            let leftLargest = 0;
            let rightLargest = 0;


            for (let left = i; left >= 0; left--) {
                if (leftLargest < height[left]) {
                    leftLargest = height[left];
                }
            }

            for (let right = i; right < height.length; right++) {
                if (rightLargest < height[right]) {
                    rightLargest = height[right];
                    
                }
            }

            const waterLevel = Math.min(leftLargest, rightLargest);
            const water = waterLevel - height[i];

            totalWater += water;
        }
        
        return totalWater;
    }
}
