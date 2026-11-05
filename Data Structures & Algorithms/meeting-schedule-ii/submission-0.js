/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    minMeetingRooms(intervals) {
        if (intervals.length === 0) return 0;

        const starts = intervals.map(i => i.start).sort((a, b) => a - b);
        const ends = intervals.map(i => i.end).sort((a, b) => a - b);

        let startPointer = 0;
        let endPointer = 0;

        let rooms = 0;
        let maxRooms = 0;

        while (startPointer < intervals.length) {
            if (starts[startPointer] < ends[endPointer]) {
                rooms++;
                startPointer++;

                maxRooms = Math.max(maxRooms, rooms);
            } else {
                rooms--;
                endPointer++;
            }
        }

        return maxRooms;
    }
}