class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        const result = [];

        for (const interval of intervals) {
            // If result is empty or there is no overlap
            if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
                result.push(interval);
            } else {
                // Merge overlapping intervals
                result[result.length - 1][1] = Math.max(result[result.length - 1][1], interval[1]);
            }
        }

        return result;
    }
}
