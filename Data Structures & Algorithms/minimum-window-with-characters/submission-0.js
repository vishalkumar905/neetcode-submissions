class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */

    minWindow(s, t) {
        const tMap = {};

        for (const c of t) {
            tMap[c] = (tMap[c] || 0) + 1;
        }

        const windowMap = {};
        let left = 0;
        let answer = "";

        for (let right = 0; right < s.length; right++) {
            windowMap[s[right]] = (windowMap[s[right]] || 0) + 1;

            while (Object.keys(tMap).every((c) => (windowMap[c] || 0) >= tMap[c])) {
                const current = s.slice(left, right + 1);

                if (!answer || current.length < answer.length) {
                    answer = current;
                }

                windowMap[s[left]]--;
                left++;
            }
        }

        return answer;
    }
}
