class Solution {
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const queue = [];
        let freshCount = 0;

        // Find all rotten fruits and count fresh fruits
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {

                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                }

                if (grid[r][c] === 1) {
                    freshCount++;
                }
            }
        }

        let minutes = 0;

        const directions = [
            [-1, 0], // top
            [1, 0],  // bottom
            [0, -1], // left
            [0, 1]   // right
        ];

        while (queue.length > 0 && freshCount > 0) {

            const size = queue.length;

            // Process everything that is rotten at the
            // beginning of this minute
            for (let i = 0; i < size; i++) {

                const [r, c] = queue.shift();

                for (const [dr, dc] of directions) {

                    const nr = r + dr;
                    const nc = c + dc;

                    // Check boundaries
                    if (
                        nr >= 0 &&
                        nr < rows &&
                        nc >= 0 &&
                        nc < cols &&
                        grid[nr][nc] === 1
                    ) {
                        // Fresh fruit becomes rotten
                        grid[nr][nc] = 2;

                        freshCount--;

                        // It can spread during the next minute
                        queue.push([nr, nc]);
                    }
                }
            }

            minutes++;
        }

        // If fresh fruits are still remaining,
        // they cannot be reached
        if (freshCount > 0) {
            return -1;
        }

        return minutes;
    }
}