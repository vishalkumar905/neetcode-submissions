class Solution {

    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        // Max heap using a sorted array
        while (stones.length > 1) {
            stones.sort((a, b) => b - a);

            const x = stones.shift();
            const y = stones.shift();

            if (x !== y) {
                stones.push(x - y);
            }
        }

        return stones.length === 1 ? stones[0] : 0;
    }
}