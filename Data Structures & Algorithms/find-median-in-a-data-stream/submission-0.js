class Heap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value);

        let i = this.heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (this.compare(this.heap[i], this.heap[parent])) {
                [this.heap[i], this.heap[parent]] =
                    [this.heap[parent], this.heap[i]];

                i = parent;
            } else {
                break;
            }
        }
    }

    pop() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();

        let i = 0;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let best = i;

            if (
                left < this.heap.length &&
                this.compare(this.heap[left], this.heap[best])
            ) {
                best = left;
            }

            if (
                right < this.heap.length &&
                this.compare(this.heap[right], this.heap[best])
            ) {
                best = right;
            }

            if (best === i) break;

            [this.heap[i], this.heap[best]] =
                [this.heap[best], this.heap[i]];

            i = best;
        }

        return root;
    }
}


class MedianFinder {
    constructor() {
        // Smaller half
        // maxHeap[0] = largest element of smaller half
        this.maxHeap = new Heap((a, b) => a > b);

        // Larger half
        // minHeap[0] = smallest element of larger half
        this.minHeap = new Heap((a, b) => a < b);
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // Put num into the correct half
        if (
            this.maxHeap.size() === 0 ||
            num <= this.maxHeap.peek()
        ) {
            this.maxHeap.push(num);
        } else {
            this.minHeap.push(num);
        }

        // Balance the heaps
        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.push(this.maxHeap.pop());
        } else if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.push(this.minHeap.pop());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.peek();
        }

        return (
            this.maxHeap.peek() + this.minHeap.peek()
        ) / 2;
    }
}