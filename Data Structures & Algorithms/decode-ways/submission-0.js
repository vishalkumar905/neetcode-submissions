class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const dp = new Array(s.length + 1).fill(0);

        dp[0] = 1;

        if (s[0] !== "0") {
            dp[1] = 1;
        }

        for (let i = 2; i <= s.length; i++) {
            // Case 1: Decode the current digit alone
            if (s[i - 1] !== "0") {
                dp[i] += dp[i - 1];
            }

            // Case 2: Decode the last two digits together
            const twoDigits = Number(s.slice(i - 2, i));

            if (twoDigits >= 10 && twoDigits <= 26) {
                dp[i] += dp[i - 2];
            }
        }

        return dp[s.length];
    }
}
