class Solution {

    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {

        // Build Trie
        const root = {};

        for (const word of words) {
            let node = root;

            for (const char of word) {
                if (!node[char]) {
                    node[char] = {};
                }

                node = node[char];
            }

            // Store complete word
            node.word = word;
        }

        const result = [];
        const rows = board.length;
        const cols = board[0].length;

        const dfs = (row, col, node) => {

            // Boundary check
            if (
                row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= cols
            ) {
                return;
            }

            const char = board[row][col];

            // Already visited
            if (char === '#') {
                return;
            }

            // Character doesn't exist in Trie
            if (!node[char]) {
                return;
            }

            const nextNode = node[char];

            // Complete word found
            if (nextNode.word) {
                result.push(nextNode.word);

                // Avoid duplicate result
                nextNode.word = null;
            }

            // Mark as visited
            board[row][col] = '#';

            // Up
            dfs(row - 1, col, nextNode);

            // Down
            dfs(row + 1, col, nextNode);

            // Left
            dfs(row, col - 1, nextNode);

            // Right
            dfs(row, col + 1, nextNode);

            // Restore character
            board[row][col] = char;
        };

        // Start DFS from every cell
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                dfs(row, col, root);
            }
        }

        return result;
    }
}