class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const words = new Set(wordList);

        // If endWord doesn't exist, transformation is impossible
        if (!words.has(endWord)) {
            return 0;
        }

        const queue = [[beginWord, 1]];
        const visited = new Set([beginWord]);

        while (queue.length > 0) {
            const [word, steps] = queue.shift();

            // We reached the target
            if (word === endWord) {
                return steps;
            }

            // Try changing every character
            for (let i = 0; i < word.length; i++) {
                for (let charCode = 97; charCode <= 122; charCode++) {
                    const char = String.fromCharCode(charCode);

                    // Don't replace with the same character
                    if (char === word[i]) {
                        continue;
                    }

                    const newWord =
                        word.slice(0, i) +
                        char +
                        word.slice(i + 1);

                    // Valid word and not visited before
                    if (words.has(newWord) && !visited.has(newWord)) {
                        visited.add(newWord);
                        queue.push([newWord, steps + 1]);
                    }
                }
            }
        }

        return 0;
    }
}