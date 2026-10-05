class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {

        const n = edges.length;

        const parent = Array.from({ length: n + 1 }, (_, i) => i);

        const find = (node) => {
            if (parent[node] === node) {
                return node;
            }

            parent[node] = find(parent[node]);
            return parent[node];
        };

        const union = (a, b) => {
            const rootA = find(a);
            const rootB = find(b);

            // Already connected => this edge creates a cycle
            if (rootA === rootB) {
                return false;
            }

            parent[rootA] = rootB;
            return true;
        };

        for (const [a, b] of edges) {
            if (!union(a, b)) {
                return [a, b];
            }
        }

        return [];
    }
}