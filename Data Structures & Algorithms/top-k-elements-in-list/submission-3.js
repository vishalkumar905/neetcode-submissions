class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};

        for (const num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        const buckets = Array(nums.length + 1)
            .fill(null)
            .map(() => []);

        for (const num in freq) {
            buckets[freq[num]].push(Number(num));
        }

        const result = [];

        for (let i = buckets.length - 1; i >=0 && result.length < k;  i--) {
            result.push(...buckets[i])
        }

        return result.splice(0, k);
    }
}
