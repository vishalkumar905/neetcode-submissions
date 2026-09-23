class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let current = this.root;

        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }

            current = current.children.get(char);
        }

        current.isEnd = true;
    }

    search(word) {
        const dfs = (node, index) => {
            // We have processed the complete word
            if (index === word.length) {
                return node.isEnd;
            }

            const char = word[index];

            // Normal character
            if (char !== '.') {
                if (!node.children.has(char)) {
                    return false;
                }

                return dfs(node.children.get(char), index + 1);
            }

            // '.' -> try every possible character
            for (const child of node.children.values()) {
                if (dfs(child, index + 1)) {
                    return true;
                }
            }

            return false;
        };

        return dfs(this.root, 0);
    }
}