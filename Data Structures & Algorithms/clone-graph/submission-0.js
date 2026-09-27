/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const map = new Map();

        function dfs(node) {
            if (node === null) {
                return null;
            }

            if (map.has(node)) {
                return map.get(node);
            }

            const copy = new Node(node.val);

            map.set(node, copy);

            for (let neighborNode of node.neighbors) {
                const newNode = dfs(neighborNode);
                copy.neighbors.push(newNode);
            }

            return copy;
        }

        return dfs(node);
    }
}
