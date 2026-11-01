class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const result = [];
        let i = 0;

        // Step 1: Add intervals that end before newInterval starts
        while (i < intervals.length && intervals[i][1] < newInterval[0]) {
            result.push(intervals[i]);
            i++;
        }

        // Step 2: Merge all overlapping intervals
        while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }

        result.push(newInterval);

        // Step 3: Add remaining intervals
        while (i < intervals.length) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    }
}
