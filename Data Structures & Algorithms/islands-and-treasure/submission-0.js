
class Solution {
    /**
     * @param {number[][]} grid
     * @returns {void} Modify grid in-place
     */
    islandsAndTreasure(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const queue = [];

        // Step 1: Add all treasure cells to the queue
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                }
            }
        }

        const directions = [
            [1, 0],   // Down
            [-1, 0],  // Up
            [0, 1],   // Right
            [0, -1]   // Left
        ];

        // Step 2: BFS from all treasure cells
        let head = 0;

        while (head < queue.length) {
            const [r, c] = queue[head++];

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                // Check grid boundaries
                if (
                    nr < 0 || nr >= m ||
                    nc < 0 || nc >= n
                ) {
                    continue;
                }

                // Only visit unvisited land cells
                if (grid[nr][nc] !== 2147483647) {
                    continue;
                }

                // Distance = current cell distance + 1
                grid[nr][nc] = grid[r][c] + 1;

                queue.push([nr, nc]);
            }
        }
    }
}
