class Solution {
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;

        const pacific = Array.from(
            { length: rows },
            () => Array(cols).fill(false)
        );

        const atlantic = Array.from(
            { length: rows },
            () => Array(cols).fill(false)
        );

        const directions = [
            [-1, 0], // up
            [1, 0],  // down
            [0, -1], // left
            [0, 1]   // right
        ];

        const dfs = (r, c, ocean) => {
            ocean[r][c] = true;

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                // Out of bounds
                if (
                    nr < 0 ||
                    nr >= rows ||
                    nc < 0 ||
                    nc >= cols
                ) {
                    continue;
                }

                // Already visited
                if (ocean[nr][nc]) {
                    continue;
                }

                // Reverse flow:
                // neighbor must be >= current cell
                if (heights[nr][nc] < heights[r][c]) {
                    continue;
                }

                dfs(nr, nc, ocean);
            }
        };

        // Pacific: top row + left column
        for (let c = 0; c < cols; c++) {
            dfs(0, c, pacific);
        }

        for (let r = 0; r < rows; r++) {
            dfs(r, 0, pacific);
        }

        // Atlantic: bottom row + right column
        for (let c = 0; c < cols; c++) {
            dfs(rows - 1, c, atlantic);
        }

        for (let r = 0; r < rows; r++) {
            dfs(r, cols - 1, atlantic);
        }

        // Cells reachable from both oceans
        const result = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (pacific[r][c] && atlantic[r][c]) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }
}