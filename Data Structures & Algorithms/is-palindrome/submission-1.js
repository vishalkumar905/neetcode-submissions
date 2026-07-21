class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isValid = (c) => /[a-zA-Z0-9]/.test(c);

        let left = 0;
        let right = s.length - 1;

        while(left <= right) {
            const leftChar = s[left];
            const rightChar = s[right];

            if (!isValid(leftChar)) {
                ++left;
            } else if (!isValid(rightChar)) {
                --right;
            } else if (leftChar.toLowerCase() === rightChar.toLowerCase()) {
                ++left;
                --right;
            } else {
                return false;
            }
        }

        return true;
    }
}
