class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Array(26).fill(0);
        let left = 0;
        let maxCount = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            let index = s[right].charCodeAt(0) - "A".charCodeAt(0);
            count[index]++;

            maxCount = Math.max(maxCount, count[index]);

            while (right - left + 1 - maxCount > k) {
                count[s[left].charCodeAt(0) - "A".charCodeAt(0)]--;
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
