class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if (num1 === "0" || num2 === "0") {
            return "0";
        }

        const m = num1.length;
        const n = num2.length;

        const result = new Array(m + n).fill(0);

        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                const digit1 = Number(num1[i]);
                const digit2 = Number(num2[j]);

                const product = digit1 * digit2;

                const sum = product + result[i + j + 1];

                result[i + j + 1] = sum % 10;

                result[i + j] += Math.floor(sum / 10);
            }
        }

        return result.join("").replace(/^0+/, "");
    }
}
