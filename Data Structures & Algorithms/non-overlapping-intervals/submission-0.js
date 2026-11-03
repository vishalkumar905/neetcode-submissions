class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals = function (intervals) {
        // 1. Sort by ending time
        intervals.sort((a, b) => a[1] - b[1]);

        // 2. Initialize tracking variables
        let prevEnd = -Infinity;
        let removals = 0;

        // 3. Process each interval
        for (const interval of intervals) {
            const start = interval[0];
            const end = interval[1];

            if (start >= prevEnd) {
                // Keep the interval
                prevEnd = end;
            } else {
                // Remove the overlapping interval
                removals++;
            }
        }

        return removals;
    };
}
