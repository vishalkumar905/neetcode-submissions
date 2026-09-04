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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const stack = [];
        let current = root;

        while (current || stack.length > 0) {
            // Go as far left as possible
            while (current) {
                stack.push(current);
                current = current.left;
            }

            // Visit the smallest remaining node
            current = stack.pop();
            k--;

            if (k === 0) {
                return current.val;
            }

            // Move to the right subtree
            current = current.right;
        }
    }
}
