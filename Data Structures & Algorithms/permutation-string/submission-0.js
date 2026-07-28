class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        const s1Map = {};

        for (let a = 0; a < s1.length; a++) {
            s1Map[s1[a]] = (s1Map[s1[a]] || 0) + 1;
        }

        const windowSize = s1.length;

        for (let right = 0; right < s2.length; right++) {
            let match = right;
            let matchMap = {};

            for (let index = right; index < right + windowSize; index++) {
                matchMap[s2[index]] = (matchMap[s2[index]] || 0) + 1;
            }

            let hasFound = false;
            if (Object.keys(matchMap).length === Object.keys(s1Map).length) {
                hasFound = Object.keys(s1Map).every((r) => {
                    return s1Map[r] === matchMap[r];
                });

                if (hasFound) {
                    return hasFound;
                }
            }
        }

        return false;
    }
}
