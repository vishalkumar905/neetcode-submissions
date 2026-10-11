
class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const result = [];
        const board = Array.from({ length: n }, () => 
            Array(n).fill(".")
        );

        const columns = new Set();
        const diagonals = new Set();      // row - col
        const antiDiagonals = new Set();  // row + col

        const backtrack = (row) => {
            // All queens have been placed
            if (row === n) {
                result.push(board.map(r => r.join("")));
                return;
            }

            // Try placing a queen in every column
            for (let col = 0; col < n; col++) {
                const diagonal = row - col;
                const antiDiagonal = row + col;

                // Check whether this position is safe
                if (
                    columns.has(col) ||
                    diagonals.has(diagonal) ||
                    antiDiagonals.has(antiDiagonal)
                ) {
                    continue;
                }

                // Choose: place the queen
                board[row][col] = "Q";
                columns.add(col);
                diagonals.add(diagonal);
                antiDiagonals.add(antiDiagonal);

                // Explore the next row
                backtrack(row + 1);

                // Undo: backtrack
                board[row][col] = ".";
                columns.delete(col);
                diagonals.delete(diagonal);
                antiDiagonals.delete(antiDiagonal);
            }
        };

        backtrack(0);
        return result;
    }
}
