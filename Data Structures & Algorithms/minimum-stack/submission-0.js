class MinStack {
    constructor() {}

    stacks = [];
    minStack = [];

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (typeof val === 'number') {
            this.stacks.push(val);

            if (this.minStack.length) {
                const min = Math.min(val, this.minStack[this.minStack.length - 1]);
                this.minStack.push(min);


                console.log(this.minStack)
            } else {
                this.minStack.push(val);
            }
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stacks.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stacks[this.stacks.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}