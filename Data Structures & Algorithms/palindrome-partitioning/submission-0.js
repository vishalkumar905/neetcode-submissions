
class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const result = [];
        const path = [];

        const isPalindrome = (str) => {
            let left = 0;
            let right = str.length - 1;

            while (left < right) {
                if (str[left] !== str[right]) {
                    return false;
                }

                left++;
                right--;
            }

            return true;
        };

        const backtrack = (start) => {
            // All characters have been partitioned
            if (start === s.length) {
                result.push([...path]);
                return;
            }

            // Try every possible substring
            for (let end = start; end < s.length; end++) {
                const substring = s.substring(start, end + 1);

                if (isPalindrome(substring)) {
                    path.push(substring);

                    backtrack(end + 1);

                    // Undo the choice
                    path.pop();
                }
            }
        };

        backtrack(0);

        return result;
    }
}
