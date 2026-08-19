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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);
        let current = dummy;
        let carry = 0;

        while (l1 || l2 || carry) {
            let x = l1 ? l1.val : 0;
            let y = l2 ? l2.val : 0;

            let sum = x + y + carry;

            carry = Math.floor(sum / 10);

            current.next = new ListNode(sum % 10);
            current = current.next;

            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }

        return dummy.next;
    }
}
