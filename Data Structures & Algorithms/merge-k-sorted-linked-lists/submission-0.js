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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        // Min heap
        const heap = [];

        const push = (node) => {
            heap.push(node);

            let i = heap.length - 1;

            while (i > 0) {
                const parent = Math.floor((i - 1) / 2);

                if (heap[parent].val <= heap[i].val) break;

                [heap[parent], heap[i]] = [heap[i], heap[parent]];
                i = parent;
            }
        };

        const pop = () => {
            if (heap.length === 1) {
                return heap.pop();
            }

            const min = heap[0];
            heap[0] = heap.pop();

            let i = 0;

            while (true) {
                let smallest = i;
                const left = 2 * i + 1;
                const right = 2 * i + 2;

                if (left < heap.length && heap[left].val < heap[smallest].val) {
                    smallest = left;
                }

                if (right < heap.length && heap[right].val < heap[smallest].val) {
                    smallest = right;
                }

                if (smallest === i) break;

                [heap[i], heap[smallest]] = [heap[smallest], heap[i]];

                i = smallest;
            }

            return min;
        };

        // Put first node of every list into heap
        for (const list of lists) {
            if (list) {
                push(list);
            }
        }

        const dummy = new ListNode(0);
        let current = dummy;

        // Merge
        while (heap.length > 0) {
            const node = pop();

            current.next = node;
            current = current.next;

            if (node.next) {
                push(node.next);
            }
        }

        return dummy.next;
    }
}
