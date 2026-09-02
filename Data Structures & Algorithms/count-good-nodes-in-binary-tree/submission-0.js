/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        const dfs = (node, maxSoFar) => {
            if (!node) return 0;

            let count = 0;

            // Current node is good if it is >= every previous node
            if (node.val >= maxSoFar) {
                count = 1;
            }

            // Update maximum for children here
            const newMax = Math.max(maxSoFar, node.val);

            count += dfs(node.left, newMax);
            count += dfs(node.right, newMax);

            return count;
        };

        return dfs(root, root.val);
    }
}
