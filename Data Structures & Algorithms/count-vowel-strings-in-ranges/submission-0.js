class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        const vowels = ["a", "e", "i", "o", "u"];

        const count = [];
        let total = 0;

        for (const word of words) {
            const isVowelString = vowels.includes(word[0]) && vowels.includes(word[word.length - 1]);

            if (isVowelString) {
                total++;
            }

            count.push(total);
        }

        const result = [];

        for (const [left, right] of queries) {
            let answer;

            if (left === 0) {
                answer = count[right];
            } else {
                answer = count[right] - count[left - 1];
            }

            result.push(answer);
        }

        return result;
    }
}
