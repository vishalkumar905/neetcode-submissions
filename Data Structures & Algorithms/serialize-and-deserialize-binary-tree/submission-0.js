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

class Codec {
    serialize(root) {
        const result = [];

        function dfs(node) {
            if (node === null) {
                result.push("N");
                return;
            }

            result.push(String(node.val));
            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);

        return result.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const values = data.split(",");
        let index = 0;

        function dfs() {
            if (values[index] === "N") {
                index++;
                return null;
            }

            const node = new TreeNode(Number(values[index]));
            index++;

            node.left = dfs();
            node.right = dfs();

            return node;
        }

        return dfs();
    }
}
