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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // 2. Reverse the second half
        let second = slow.next;
        slow.next = null;

        let prev = null;

        while (second !== null) {
            let next = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }

        // prev is now the head of the reversed second half
        second = prev;

        // 3. Merge the two halves
        let first = head;

        while (second !== null) {
            let firstNext = first.next;
            let secondNext = second.next;

            first.next = second;
            second.next = firstNext;

            first = firstNext;
            second = secondNext;
        }
    }
}
