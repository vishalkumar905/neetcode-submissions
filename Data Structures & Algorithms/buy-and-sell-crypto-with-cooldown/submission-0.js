class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let hold = -Infinity;
        let sold = -Infinity;
        let rest = 0;

        for (const price of prices) {
            const prevHold = hold;
            const prevSold = sold;
            const prevRest = rest;

            hold = Math.max(prevHold, prevRest - price);
            sold = prevHold + price;
            rest = Math.max(prevRest, prevSold);
        }

        return Math.max(sold, rest);
    }
}
