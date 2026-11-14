class CountSquares {
    constructor() {
        this.points = new Map();
    }

    add(point) {
        const key = `${point[0]},${point[1]}`;

        this.points.set(key, (this.points.get(key) || 0) + 1);
    }

    count(point) {
        const [x, y] = point;
        let result = 0;

        // Check every stored point as a possible diagonal
        for (const [key, frequency] of this.points) {
            const [x2, y2] = key.split(",").map(Number);

            // Diagonal must have equal, non-zero X and Y differences
            if (x === x2 || Math.abs(x2 - x) !== Math.abs(y2 - y)) {
                continue;
            }

            // Calculate the remaining two corners
            const point1 = `${x},${y2}`;
            const point2 = `${x2},${y}`;

            const freq1 = this.points.get(point1) || 0;
            const freq2 = this.points.get(point2) || 0;

            // Multiply frequencies to account for duplicates
            result += frequency * freq1 * freq2;
        }

        return result;
    }
}
