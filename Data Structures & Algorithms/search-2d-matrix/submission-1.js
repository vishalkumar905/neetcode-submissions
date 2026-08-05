class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let top = 0;
        let bottom = matrix.length - 1;

        while (top <= bottom) {
            const mid = Math.floor((top + bottom) / 2);

            if (target < matrix[mid][0]) {
                bottom = mid - 1;
            } else if (target > matrix[mid][matrix[mid].length - 1]) {
                top = mid + 1;
            } else {
                let left = 0;
                let right = matrix[mid].length - 1;

                while (left <= right) {
                    const m = Math.floor((left + right) / 2);

                    if (matrix[mid][m] === target) {
                        return true;
                    } else if (target < matrix[mid][m]) {
                        right = m - 1;
                    } else {
                        left = m + 1;
                    }
                }

                return false;
            }
        }

        return false;
    }
}
