class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];

        function backtrack(str, open, close) {
            if (open === n && close === n) {
                result.push(str);
                return;
            }

            if (open < n) {
                backtrack(str + "(", open + 1, close);
            }

            if (close < open) {
                backtrack(str + ")", open, close + 1);
            }
        }

        backtrack("", 0, 0);

        return result;
    }
}
