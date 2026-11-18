class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let result = 0;

        for (let i = 0; i < 32; i++) {
            // Extract the last bit
            let bit = n & 1;

            // Shift result left and add the extracted bit
            result = (result << 1) | bit;

            // Move n to the right
            n = n >>> 1;
        }

        return result >>> 0;
    }
}
