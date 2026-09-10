class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        // Sort by squared distance from the origin
        points.sort((a, b) => {
            const distA = a[0] * a[0] + a[1] * a[1];
            const distB = b[0] * b[0] + b[1] * b[1];

            return distA - distB;
        });

        // Return the first k points
        return points.slice(0, k);
    }
}
