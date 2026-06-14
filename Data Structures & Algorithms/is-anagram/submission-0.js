class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const matching = {};

        for (let i = 0; i < s.length; i++) {
            const val = s[i];
            matching[val] = (matching[val] || 0) + 1;
        }

        for (let j = 0; j < t.length; j++) {
            const val = t[j];

            if (!matching[val]) {
                return false;
            }
            
            matching[val] = matching[val] - 1;
        }

        return true;
    }
}
