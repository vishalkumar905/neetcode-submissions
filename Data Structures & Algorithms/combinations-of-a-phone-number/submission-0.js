class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits) {
            return [];
        }
        
        const phone = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        };

        const result = [];
        let path = "";

        function backtrack(index) {
            if (index === digits.length) {
                result.push(path);
                return;
            }

            const letters = phone[digits[index]];

            for (let i = 0; i < letters.length; i++) {
                const letter = letters[i];

                path += letter;

                backtrack(index + 1);

                path = path.slice(0, -1);
            }
        }

        backtrack(0);

        return result;
    }
}
