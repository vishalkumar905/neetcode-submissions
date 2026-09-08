class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.k = k;
    this.heap = [];

    for (let num of nums) {
      this.add(num);
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    this.heap.push(val);

    // Sort in ascending order
    this.heap.sort((a, b) => a - b);

    // Keep only the k largest elements
    if (this.heap.length > this.k) {
      this.heap.shift();
    }

    // Smallest of the k largest = kth largest
    return this.heap[0];
  }
}
