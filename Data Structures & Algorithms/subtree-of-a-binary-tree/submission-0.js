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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function isSameTree(a, b) {
            if (a === null && b === null) return true;
            if (a === null || b === null) return false;
            if (a.val !== b.val) return false;

            return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
        }

        if (subRoot === null) return true;
        if (root === null) return false;

        return (
            isSameTree(root, subRoot) ||
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot)
        );
    }
}
