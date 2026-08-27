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
     * @return {boolean}
     */

    isBalanced(root) {
        return this.checkHeight(root) !== -1;
    }

    checkHeight(root) {
        if (root === null) {
            return 0;
        }

        const leftDepth = this.checkHeight(root.left);

        if (leftDepth === -1) {
            return -1;
        }

        const rightDepth = this.checkHeight(root.right);

        if (rightDepth === -1) {
            return -1;
        }

        const difference = Math.abs(leftDepth - rightDepth);

        if (difference > 1) {
            return -1;
        }

        return 1 + Math.max(leftDepth, rightDepth);
    }
}
