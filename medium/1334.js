// 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance
// There are n cities numbered from 0 to n-1. Given the array edges where edges[i] = [fromi, toi, weighti] represents a bidirectional and weighted edge between cities fromi and toi, and given the integer distanceThreshold.
// Return the city with the smallest number of cities that are reachable through some path and whose distance is at most distanceThreshold, If there are multiple such cities, return the city with the greatest number.
// Notice that the distance of a path connecting cities i and j is equal to the sum of the edges' weights along that path.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
    // populate adj
    let adj = new Array(n);
    for (let i = 0; i < n; i++) adj[i] = [];
    edges.forEach(edge => {
        let [from, to, dist] = edge;
        adj[from].push([to, dist]);
        adj[to].push([from, dist]);
    })

    let min = null;
    let cityCount = Number.POSITIVE_INFINITY;

    // run dijkstra for each city
    for (let i = 0; i < n; i++) {
        let distTo = dijkstra(n, adj, i, distanceThreshold).filter(d => d <= distanceThreshold);
        // distTo is smaller. if equal - take bigger index.
        if (cityCount >= distTo.length) {
            min = i;
            cityCount = distTo.length;
        }
    }
    return min
};

function dijkstra(n, adj, ind, distanceThreshold) {
    let distTo = new Array(n).fill(Number.POSITIVE_INFINITY);
    distTo[ind] = 0;

    let minQ = new MinQ((a, b) => a[1] - b[1]);
    minQ.add([ind, 0]);

    while (!minQ.isEmpty()) {
        let [el, dist] = minQ.delMin();
        if (dist > distTo[el]) continue;

        for (let [child, distToChild] of adj[el]) {
            let dustSum = distToChild + dist;
            if (dustSum > distanceThreshold) continue;
            if (distTo[child] > dustSum) {
                distTo[child] = dustSum;
                minQ.add([child, distTo[child]]);
            }
        }
    }
    return distTo;
}

class MinQ {
    constructor(comparator) {
        this.pq = [null];
        this.comparator = comparator;
    }

    swim(ind) {
        while (ind > 1) {
            let j = Math.floor(ind / 2);
            if (!this.isLess(ind, j)) break;

            this.swap(ind, j);
            ind = j;
        }
    }

    sink(ind) {
        while (ind * 2 < this.pq.length) {
            let j = ind * 2;
            if (j < this.pq.length - 1 && this.isLess(j + 1, j)) j++;
            if (this.isLess(ind, j)) break;

            this.swap(ind, j);
            ind = j;
        }
    }

    add(val) {
        this.pq.push(val);
        this.swim(this.pq.length - 1);
    }

    isEmpty() {
        return this.pq.length === 1;
    }

    delMin() {
        if (this.pq.length === 1) return null;
        let max = this.pq[1];
        this.pq[1] = this.pq[this.pq.length - 1];
        this.pq.pop();
        this.sink(1);
        return max;
    }

    swap(a, b) {
        [this.pq[a], this.pq[b]] = [this.pq[b], this.pq[a]];
    }

    isLess(a, b) {
        return this.comparator(this.pq[a], this.pq[b]) < 0;
    }
}


let q = new MinQ((a, b) => a - b);
q.add(3);
q.add(8);
q.add(6);
q.add(9);
q.add(5);
// console.log(q.delMin(), q.delMin(), q.delMin(), q.delMin(), q.delMin(), q.delMin()); // 3 5 6 8 9 null
console.log(findTheCity(4, [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], 4)); // 3
console.log(findTheCity(5, [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], 2)); // 0