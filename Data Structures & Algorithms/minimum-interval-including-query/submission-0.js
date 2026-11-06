class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {

        intervals.sort((a, b) => a[0] - b[0]);

        const sortedQueries = queries
            .map((q, index) => [q, index])
            .sort((a, b) => a[0] - b[0]);

        const result = new Array(queries.length).fill(-1);

        // Min Heap: [interval length, right]
        const heap = [];

        const push = (val) => {
            heap.push(val);

            let i = heap.length - 1;

            while (i > 0) {
                const parent = Math.floor((i - 1) / 2);

                if (heap[parent][0] <= heap[i][0]) break;

                [heap[parent], heap[i]] = [heap[i], heap[parent]];

                i = parent;
            }
        };

        const pop = () => {
            const min = heap[0];
            const last = heap.pop();

            if (heap.length > 0) {
                heap[0] = last;

                let i = 0;

                while (true) {
                    let smallest = i;
                    const left = 2 * i + 1;
                    const right = 2 * i + 2;

                    if (left < heap.length &&
                        heap[left][0] < heap[smallest][0]) {
                        smallest = left;
                    }

                    if (right < heap.length &&
                        heap[right][0] < heap[smallest][0]) {
                        smallest = right;
                    }

                    if (smallest === i) break;

                    [heap[i], heap[smallest]] =
                        [heap[smallest], heap[i]];

                    i = smallest;
                }
            }

            return min;
        };

        let i = 0;

        for (const [query, index] of sortedQueries) {

            // Add all intervals that have started
            while (i < intervals.length &&
                   intervals[i][0] <= query) {

                const [left, right] = intervals[i];

                push([right - left + 1, right]);

                i++;
            }

            // Remove expired intervals
            while (heap.length > 0 && heap[0][1] < query) {
                pop();
            }

            // Get shortest valid interval
            if (heap.length > 0) {
                result[index] = heap[0][0];
            }
        }

        return result;
    }
}