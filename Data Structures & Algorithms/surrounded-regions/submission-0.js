/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
class Solution {
    solve(board) {
        if (!board || board.length === 0) return;

        const rows = board.length;
        const cols = board[0].length;

        const dfs = (r, c) => {
            // Out of bounds
            if (r < 0 || r >= rows || c < 0 || c >= cols) {
                return;
            }

            // Only process O
            if (board[r][c] !== 'O') {
                return;
            }

            // Mark this O as safe
            board[r][c] = '#';

            // Visit 4 neighbours
            dfs(r - 1, c); // top
            dfs(r + 1, c); // bottom
            dfs(r, c - 1); // left
            dfs(r, c + 1); // right
        };

        // 1. Find all O's connected to the border

        // Top + Bottom rows
        for (let c = 0; c < cols; c++) {
            dfs(0, c);
            dfs(rows - 1, c);
        }

        // Left + Right columns
        for (let r = 0; r < rows; r++) {
            dfs(r, 0);
            dfs(r, cols - 1);
        }

        // 2. Capture surrounded regions
        // 3. Restore safe regions

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {

                if (board[r][c] === 'O') {
                    // Not connected to border => surrounded
                    board[r][c] = 'X';

                } else if (board[r][c] === '#') {
                    // Connected to border => safe
                    board[r][c] = 'O';
                }
            }
        }
    }
}