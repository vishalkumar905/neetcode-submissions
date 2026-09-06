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
    maxPathSum(root) {
        let maxSum = -Infinity;

        function dfs(node) {
            if (node === null) {
                return 0;
            }

            // Maximum contribution from left and right subtrees.
            // Ignore negative contributions.
            const leftGain = Math.max(0, dfs(node.left));
            const rightGain = Math.max(0, dfs(node.right));

            // Best path that passes through this node
            const currentPath = node.val + leftGain + rightGain;

            // Update global maximum
            maxSum = Math.max(maxSum, currentPath);

            // Return the best path that can be extended to the parent.
            // We can only choose ONE side.
            return node.val + Math.max(leftGain, rightGain);
        }

        dfs(root);

        return maxSum;
    }
}
