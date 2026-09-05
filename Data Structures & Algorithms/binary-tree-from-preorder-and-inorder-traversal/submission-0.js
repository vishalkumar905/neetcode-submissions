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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const inorderMap = new Map();

        // Store each value's index in inorder
        for (let i = 0; i < inorder.length; i++) {
            inorderMap.set(inorder[i], i);
        }

        let preorderIndex = 0;

        function build(left, right) {
            // No elements in this subtree
            if (left > right) {
                return null;
            }

            // First element in preorder is the root
            const rootValue = preorder[preorderIndex++];
            const root = new TreeNode(rootValue);

            // Find root in inorder
            const mid = inorderMap.get(rootValue);

            // Build left subtree
            root.left = build(left, mid - 1);

            // Build right subtree
            root.right = build(mid + 1, right);

            return root;
        }

        return build(0, inorder.length - 1);
    }
}
