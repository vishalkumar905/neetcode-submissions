/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let current = head;

        while (current !== null) {
            let next = current.next; // save the next node
            current.next = prev; // reverse the pointer
            prev = current; // move prev forward
            current = next; // move current forward
        }

        return prev;
    }
}
