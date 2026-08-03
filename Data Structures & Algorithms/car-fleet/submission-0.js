class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const map = {};

        for (let i = 0; i < position.length; i++) {
            map[position[i]] = speed[i];
        }

        const sortedPostion = position.sort((a, b) => b - a);

        let fleetTime = (target - sortedPostion[0]) / map[sortedPostion[0]];
        let totalFleet = 1;

        for (let j = 1; j < sortedPostion.length; j++) {
            const currentTime = (target - sortedPostion[j]) / map[sortedPostion[j]];

            if (currentTime > fleetTime) {
                fleetTime = currentTime;
                ++totalFleet;
            }
        }

        return totalFleet;
    }
}
