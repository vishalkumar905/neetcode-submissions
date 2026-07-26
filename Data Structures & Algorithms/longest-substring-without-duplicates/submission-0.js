class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map();
        let left = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            if (map.has(s[right])) {
                left = Math.max(left, map.get(s[right]) + 1);
            }

            map.set(s[right], right);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
