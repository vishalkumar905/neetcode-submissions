class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length;
        const cols = board[0].length;

        const visited = new Set();

        const dfs = (r, c, index) => {
            // We matched the entire word
            if (index === word.length) {
                return true;
            }

            // Out of bounds
            if (
                r < 0 ||
                r >= rows ||
                c < 0 ||
                c >= cols
            ) {
                return false;
            }

            // Already used this cell
            if (visited.has(`${r},${c}`)) {
                return false;
            }

            // Current character doesn't match
            if (board[r][c] !== word[index]) {
                return false;
            }

            // Use this cell
            visited.add(`${r},${c}`);

            // Explore 4 directions
            const found =
                dfs(r + 1, c, index + 1) || // down
                dfs(r - 1, c, index + 1) || // up
                dfs(r, c + 1, index + 1) || // right
                dfs(r, c - 1, index + 1);   // left

            // Backtrack
            visited.delete(`${r},${c}`);

            return found;
        };

        // Try every cell as the starting point
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (dfs(r, c, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}