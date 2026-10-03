class Solution {

    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {

        // A tree with n nodes must have exactly n - 1 edges
        if (edges.length !== n - 1) {
            return false;
        }

        // Build adjacency list
        const graph = Array.from({ length: n }, () => []);

        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        // DFS
        const visited = new Set();

        const dfs = (node, parent) => {

            if (visited.has(node)) {
                return false; // cycle
            }

            visited.add(node);

            for (const neighbor of graph[node]) {

                // Don't go back to the node we came from
                if (neighbor === parent) {
                    continue;
                }

                if (!dfs(neighbor, node)) {
                    return false;
                }
            }

            return true;
        };

        // Start DFS from node 0
        if (!dfs(0, -1)) {
            return false;
        }

        // Make sure every node was reached
        return visited.size === n;
    }
}