class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let result = [];

        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;

        while (top <= bottom && left <= right) {
            // 1. Left to Right
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            top++;

            // 2. Top to Bottom
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            right--;

            // 3. Right to Left
            if (top <= bottom) {
                for (let i = right; i >= left; i--) {
                    result.push(matrix[bottom][i]);
                }
                bottom--;
            }

            // 4. Bottom to Top
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    result.push(matrix[i][left]);
                }
                left++;
            }
        }

        return result;
    }
}
