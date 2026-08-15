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
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next; // moves 1 step
            fast = fast.next.next; // moves 2 steps

            if (slow === fast) {
                return true;
            }
        }

        return false;
    }
}
