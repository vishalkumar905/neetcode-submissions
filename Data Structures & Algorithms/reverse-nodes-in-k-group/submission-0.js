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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        // Dummy node makes connecting groups easier
        const dummy = new ListNode(0);
        dummy.next = head;

        let groupPrev = dummy;

        while (true) {
            // Find the kth node
            let kth = groupPrev;

            for (let i = 0; i < k; i++) {
                kth = kth.next;

                // Fewer than k nodes remain
                if (kth === null) {
                    return dummy.next;
                }
            }

            const groupNext = kth.next;

            // Reverse the group
            let prev = groupNext;
            let curr = groupPrev.next;

            while (curr !== groupNext) {
                const temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }

            // Connect previous part to reversed group
            const oldGroupStart = groupPrev.next;
            groupPrev.next = kth;

            // Move to the next group
            groupPrev = oldGroupStart;
        }
    }
}
