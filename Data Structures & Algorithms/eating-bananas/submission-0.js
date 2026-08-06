class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let ans = right;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            const hours = piles.reduce((acc, curr) => acc + Math.ceil(curr / mid), 0);

            if (hours <= h) {
                ans = mid; // current speed works
                right = mid - 1; // try a smaller speed
            } else {
                left = mid + 1; // need a faster speed
            }
        }

        return ans;
    }
}
