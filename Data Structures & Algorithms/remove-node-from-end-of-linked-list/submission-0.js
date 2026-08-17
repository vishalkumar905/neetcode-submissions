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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(0);
        dummy.next = head;

        let slow = dummy;
        let fast = dummy;

        // Move fast n+1 steps ahead
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        }

        // Move both pointers until fast reaches null
        while (fast !== null) {
            slow = slow.next;
            fast = fast.next;
        }

        // Remove the nth node from the end
        slow.next = slow.next.next;

        return dummy.next;
    }
}
