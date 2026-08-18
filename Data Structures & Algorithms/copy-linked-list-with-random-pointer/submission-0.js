// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        // Map: original node -> copied node
        const map = new Map();

        // First pass: create all new nodes
        let curr = head;

        while (curr !== null) {
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        // Second pass: connect next and random
        curr = head;

        while (curr !== null) {
            const copy = map.get(curr);

            copy.next = map.get(curr.next) || null;
            copy.random = map.get(curr.random) || null;

            curr = curr.next;
        }

        return map.get(head) || null;
    }
}
