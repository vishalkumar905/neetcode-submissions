class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    set(key, value, timestamp) {
        const store = this.keyStore.get(key) || [];

        store.push([timestamp, value]);

        this.keyStore.set(key, store);
    }

    get(key, timestamp) {
        const store = this.keyStore.get(key);

        if (!store) {
            return "";
        }

        let left = 0;
        let right = store.length - 1;
        let best = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (store[mid][0] <= timestamp) {
                best = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if (best === -1) {
            return "";
        }

        return store[best][1];
    }
}
