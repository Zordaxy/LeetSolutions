// 253. Meeting Rooms II
// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let starts = intervals.map(x => x[0]).sort((a, b) => a - b);
    let ends = intervals.map(x => x[1]).sort((a, b) => a - b);
    
    let active = 0;
    let maxActive = 0;
    
    while(starts.length || ends.length) {
        if (!starts.length) {
            active--;
            ends.shift();
        } else if (starts[0] < ends[0]) {
            starts.shift();
            active++;
            maxActive = Math.max(maxActive, active);
        } else {
            ends.shift();
            active--;
        }
    }
    return maxActive;
};