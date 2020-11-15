// 752. Open the Lock
// You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.
// The lock initially starts at '0000', a string representing the state of the 4 wheels.
// You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.
// Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    // Depth first search folloving all possible combinations.
    if (deadends.some(x => x === "0000") || !target) return -1;
    if (target === "0000") return 0;
    let queue = [[0, 0, 0, 0]];
    let visited = new Set(["0000"]);
    let found = false;
    let count = 0;
    
    // Mark visited deadlocks;
    deadends.forEach(x => visited.add(x));

    const checkEdge = (a, b, c, d) => {
        let key = [a, b, c, d].join('');
        if (key === target) found = true;

        if (!visited.has(key)) {
            queue.push([a, b, c, d]);
            visited.add(key);
        }
    }

    while (queue.length) {
        count++;
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let [a, b, c, d] = queue.shift();
            checkEdge((a + 1) % 10, b, c, d);
            checkEdge((a + 9) % 10, b, c, d);

            checkEdge(a, (b + 1) % 10, c, d);
            checkEdge(a, (b + 9) % 10, c, d);

            checkEdge(a, b, (c + 1) % 10, d);
            checkEdge(a, b, (c + 9) % 10, d);

            checkEdge(a, b, c, (d + 1) % 10);
            checkEdge(a, b, c, (d + 9) % 10);

            if (found) return count;
        }
    }
    return - 1;
}


console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"));
console.log(openLock(["8888"], "0009"));