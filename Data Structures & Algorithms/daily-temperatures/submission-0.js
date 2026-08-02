class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = [];

        for (let i = 0; i < temperatures.length; i++) {
            let right = 1 + i;
            let hasFound = false;

            while (right <= temperatures.length) {
                if (temperatures[i] < temperatures[right]) {
                    result.push(right - i);
                    hasFound = true;

                    break;
                }

                right++;
            }

            if (!hasFound) {
                result.push(0);
            }
        }

        return result;
    }
}
