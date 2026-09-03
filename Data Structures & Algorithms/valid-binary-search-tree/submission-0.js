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
    isValidBST(root) {
        function validate(node, min, max) {
            if (node === null) {
                return true;
            }

            // Node must be strictly between min and max
            if (node.val <= min || node.val >= max) {
                return false;
            }

            // Left subtree: values must be < node.val
            // Right subtree: values must be > node.val
            return validate(node.left, min, node.val) && validate(node.right, node.val, max);
        }

        return validate(root, -Infinity, Infinity);
    }
}
