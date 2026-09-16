class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];

        candidates.sort((a, b) => a - b);

        function backtrack(start, remaining, current) {
            // We found a valid combination
            if (remaining === 0) {
                result.push([...current]);
                return;
            }

            for (let i = start; i < candidates.length; i++) {
                // Skip duplicate numbers at the same level
                if (i > start && candidates[i] === candidates[i - 1]) {
                    continue;
                }

                // Since array is sorted, no point going further
                if (candidates[i] > remaining) {
                    break;
                }

                // Choose
                current.push(candidates[i]);

                // i + 1 because each element can be used only once
                backtrack(i + 1, remaining - candidates[i], current);

                // Undo
                current.pop();
            }
        }

        backtrack(0, target, []);

        return result;
    }
}
