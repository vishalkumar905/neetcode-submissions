class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {

                if (grid[row][col] === 1) {
                    const area = this.dfs(grid, row, col);
                    maxArea = Math.max(maxArea, area);
                }
            }
        }

        return maxArea;
    }

    dfs(grid, row, col) {
        // Out of bounds or water
        if (
            row < 0 ||
            row >= grid.length ||
            col < 0 ||
            col >= grid[0].length ||
            grid[row][col] === 0
        ) {
            return 0;
        }

        // Mark as visited
        grid[row][col] = 0;

        let area = 1;

        area += this.dfs(grid, row - 1, col); // up
        area += this.dfs(grid, row + 1, col); // down
        area += this.dfs(grid, row, col - 1); // left
        area += this.dfs(grid, row, col + 1); // right

        return area;
    }
}