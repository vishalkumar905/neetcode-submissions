class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let reversed = 0;

        while (x !== 0) {
            let digit = x % 10;
            x = Math.trunc(x / 10);

            reversed = reversed * 10 + digit;
        }

        if (reversed < -2147483648 || reversed > 2147483647) {
            return 0;
        }

        return reversed;
    }
}
