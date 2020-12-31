// 1011. Capacity To Ship Packages Within D Days
//  A conveyor belt has packages that must be shipped from one port to another within D days.
// The i-th package on the conveyor belt has a weight of weights[i].  Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.
// Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within D days.

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
    let packages = weights;
    let d = D;
    let isValid = size => {
        let days = 0;
        let ind = 0;
        while (days < d) {
            let sum = 0;
            while (sum + packages[ind] <= size) {
                sum += packages[ind];
                ind++;
            }
            if (ind === packages.length) return true;
            days++;
        }
        return false;
    }
    let hi = packages.reduce((acc, val) => acc + val, 0);
    let lo = Math.ceil(hi / packages.length);
    while (lo < hi) {
        
        let mid = Math.floor((hi + lo) / 2);
        if (isValid(mid)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
}