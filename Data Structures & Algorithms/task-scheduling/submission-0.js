class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Map();

        for (const task of tasks) {
            freq.set(task, (freq.get(task) || 0) + 1);
        }

        let maxFreq = 0;
        let countMax = 0;

        for (const count of freq.values()) {
            if (count > maxFreq) {
                maxFreq = count;
                countMax = 1;
            } else if (count === maxFreq) {
                countMax++;
            }
        }

        const minimumCycles = (maxFreq - 1) * (n + 1) + countMax;

        return Math.max(tasks.length, minimumCycles);
    }
}
