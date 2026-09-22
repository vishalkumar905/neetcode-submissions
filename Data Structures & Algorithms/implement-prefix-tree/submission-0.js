class PrefixTree {
    constructor() {
        this.root = {
            children: {},
            isEnd: false,
        };
    }

    insert(word) {
        let current = this.root;

        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = {
                    children: {},
                    isEnd: false,
                };
            }

            current = current.children[char];
        }

        current.isEnd = true;
    }

    search(word) {
        let current = this.root;

        for (const char of word) {
            if (!current.children[char]) {
                return false;
            }

            current = current.children[char];
        }

        return current.isEnd;
    }

    startsWith(prefix) {
        let current = this.root;

        for (const char of prefix) {
            if (!current.children[char]) {
                return false;
            }

            current = current.children[char];
        }

        return true;
    }
}
