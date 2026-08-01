class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const token of tokens) {
            if (token === "+" || token === "-" || token === "*" || token === "/") {
                const b = stack.pop();
                const a = stack.pop();

                switch (token) {
                    case "+":
                        stack.push(a + b);
                        break;
                    case "-":
                        stack.push(a - b);
                        break;
                    case "*":
                        stack.push(a * b);
                        break;
                    case "/":
                        stack.push(Math.trunc(a / b)); // truncate toward zero
                        break;
                }
            } else {
                stack.push(Number(token));
            }
        }

        return stack.pop();
    }
}
