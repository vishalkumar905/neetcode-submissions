class Solution {
    countComponents(n, edges) {
        const graph = Array.from({ length: n }, () => []);

        // Build adjacency list
        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        const visited = new Set();
        let components = 0;

        const dfs = (node) => {
            visited.add(node);

            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        };

        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                components++;
                dfs(i);
            }
        }

        return components;
    }
}