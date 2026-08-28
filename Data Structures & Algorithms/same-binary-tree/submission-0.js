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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // Both are empty
        if (p === null && q === null) {
            return true;
        }

        // One is empty, the other isn't
        if (p === null || q === null) {
            return false;
        }

        // Values are different
        if (p.val !== q.val) {
            return false;
        }

        // Compare left and right subtrees
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}
