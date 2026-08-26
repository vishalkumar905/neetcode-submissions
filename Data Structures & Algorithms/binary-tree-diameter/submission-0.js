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
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;

        function dfs(node) {
            if (node === null) {
                return 0;
            }

            const leftDepth = dfs(node.left);
            const rightDepth = dfs(node.right);

            maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

            return 1 + Math.max(leftDepth, rightDepth);
        }

        dfs(root);

        return maxDiameter;
    }
}
