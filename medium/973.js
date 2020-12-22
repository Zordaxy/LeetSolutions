// 973. K Closest Points to Origin
// We have a list of points on the plane.  Find the K closest points to the origin (0, 0).
// (Here, the distance between two points on a plane is the Euclidean distance.)
// You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
    let pq = new MinQ(K, (a, b) => a.dist - b.dist);
    for (let point of points) {
        pq.add({ point: point, dist: point[0] * point[0] + point[1] * point[1] });
    }
    let result = [];
    for (let i = 0; i < K; i++) {
        let point = pq.delMin();
        if (!point) break;
        result.push(point);
    }
    return result.map(p => p.point);
};

class MinQ {
    constructor(max, comparator) {
        this.pq = [null];
        // this.maxSize = max;
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
        // if (this.pq.length > this.maxSize + 1) this.pq.pop();
    }

    delMin() {
        console.log(this.pq)
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


/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosestQuickSelect = function (points, K) {
    let getDistance = point => point[0] * point[0] + point[1] * point[1];

    let partition = (lo, hi) => {
        let ind = lo;
        let pivot = getDistance(points[hi]);
        
        for (let i = lo; i < hi; i++) {
            if (getDistance(points[i]) < pivot) {
                swap(i, ind);
                ind++;
            }
        }
        swap(hi, ind);
        
        return ind;
    }

    let swap = (a, b) => [points[a], points[b]] = [points[b], points[a]];

    let lo = 0;
    let hi = points.length - 1;

    while (lo < hi) {
        let pivotInd = partition(lo, hi);
        if (pivotInd === K - 1) return points.slice(0, K);
        if (pivotInd > K - 1) {
            hi = pivotInd - 1;
        } else {
            lo = pivotInd + 1;
        }
    }

    return points.slice(0, K);
};


// console.log(kClosestQuickSelect([[1, 3], [-2, 2]], 1), kClosestQuickSelect([[3, 3], [5, -1], [-2, 4]], 2));
console.log(kClosestQuickSelect([[-2, 10], [-4, -8], [10, 7], [-4, -7]], 3));
console.log(kClosestQuickSelect([[-2, -5], [8, 5], [-10, -3], [-7, -1], [2, -2], [2, 8]], 5));

