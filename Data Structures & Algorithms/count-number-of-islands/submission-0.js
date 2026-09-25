class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;

        const rows = grid.length;
        const cols = grid[0].length;

        const dfs = (row, col) => {
            // Out of bounds
            if (
                row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= cols
            ) {
                return;
            }

            // Water or already visited
            if (grid[row][col] === "0") {
                return;
            }

            // Mark as visited
            grid[row][col] = "0";

            // Visit neighbors
            dfs(row - 1, col); // up
            dfs(row + 1, col); // down
            dfs(row, col - 1); // left
            dfs(row, col + 1); // right
        };

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {

                if (grid[row][col] === "1") {
                    count++;

                    // Explore the entire island
                    dfs(row, col);
                }
            }
        }

        return count;
    }
}