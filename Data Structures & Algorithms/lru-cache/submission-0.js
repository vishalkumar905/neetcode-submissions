class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        // Dummy nodes
        this.head = new Node(0, 0); // LRU side
        this.tail = new Node(0, 0); // MRU side

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // Remove a node from the linked list
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // Insert node right before tail (most recently used)
    insert(node) {
        node.prev = this.tail.prev;
        node.next = this.tail;

        this.tail.prev.next = node;
        this.tail.prev = node;
    }

    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }

        const node = this.map.get(key);

        // This key was just used, so move it to MRU
        this.remove(node);
        this.insert(node);

        return node.value;
    }

    put(key, value) {
        // Key already exists
        if (this.map.has(key)) {
            const node = this.map.get(key);

            node.value = value;

            // Mark as most recently used
            this.remove(node);
            this.insert(node);

            return;
        }

        // Add new key
        const node = new Node(key, value);
        this.map.set(key, node);
        this.insert(node);

        // Cache exceeded capacity
        if (this.map.size > this.capacity) {
            const lru = this.head.next;

            this.remove(lru);
            this.map.delete(lru.key);
        }
    }
}