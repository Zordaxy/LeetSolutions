// 912. Sort an Array
// Given an array of integers nums, sort the array in ascending order.
// Merge sort

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    return quickSort(nums);
};

function mergeSertRecursive(nums) {
    if (nums.length <= 1) return nums;
    let aux = new Array(nums.length);

    let merge = (lo, pivot, hi) => {
        // copy nums to aux for selected range.
        for (let j = lo; j <= hi; j++) aux[j] = nums[j];
        // rInd - pivot + 1 (not hi);
        let lInd = lo, rInd = pivot + 1;

        // main merge
        for (let i = lo; i <= hi; i++) {
            if (lInd > pivot) nums[i] = aux[rInd++];
            else if (rInd > hi) nums[i] = aux[lInd++];
            else if (aux[lInd] > aux[rInd]) nums[i] = aux[rInd++];
            else nums[i] = aux[lInd++];
        }
    }

    let sort = (lo, hi) => {
        if (lo >= hi) return;
        let pivot = Math.floor((hi - lo) / 2 + lo);
        sort(lo, pivot);
        sort(pivot + 1, hi);
        // pass indexes + pivot, not two arrays or 2 indexes
        merge(lo, pivot, hi);
    }

    sort(0, nums.length - 1);
    return nums;
};

function mergeSortIterative(nums) {
    if (nums.length <= 1) return nums;
    let aux = new Array(nums.length);

    let merge = (lo, pivot, hi) => {
        for (let j = lo; j < hi; j++) aux[j] = nums[j];
        let lInd = lo, rInd = pivot;

        for (let i = lo; i < hi; i++) {
            if (lInd >= pivot) nums[i] = aux[rInd++];
            else if (rInd >= hi) nums[i] = aux[lInd++];
            else if (aux[lInd] > aux[rInd]) nums[i] = aux[rInd++];
            else nums[i] = aux[lInd++];
        }
    }

    // range combines left and right side
    // Ranges changed!: lo -> pivot - 1; pivot - hi - 1 (to amortize pivot)
    let range = 1;
    while (range < nums.length) {
        for(let i = 0; i < nums.length; i += range * 2) {
            let pivot = i + range;
            if (pivot < nums.length) merge(i, pivot, Math.min(i + range * 2, nums.length));
        }
        range *= 2;
    }

    return nums;
};

// Alternative with array manipulations
function mergeSortSlice(nums) {
    let sort = nums => {
        if (nums.length < 2) return nums;
        let mid = Math.floor(nums.length / 2);

        // splin in range 0 -> mid - 1; mid -> nums.length - 1
        let left = sort(nums.slice(0, mid));
        let right = sort(nums.slice(mid));
        return merge(left, right);
    }

    let merge = (a, b) => {
        let result = [];
        let lInd = 0, rInd = 0;

        let len = a.length + b.length;
        for (let i = 0; i < len; i++) {
            if (lInd === a.length) result[i] = b[rInd++];
            else if (rInd === b.length) result[i] = a[lInd++];
            else if (a[lInd] > b[rInd]) result[i] = b[rInd++];
            else result[i] = a[lInd++];
        }
        return result;
    }

    if (!nums) return [];
    return sort(nums);
}

function quickSort(nums)  {
    if (nums.length < 2) return nums;

    let sort = (lo, hi) => {
        if (lo >= hi) return;
        let pivot = partition(lo, hi);
        sort(lo, pivot - 1);
        sort(pivot + 1, hi);
    };

    let partition = (lo, hi) => {
        let pivot = nums[hi];
        let ind = lo;
        for (let i = lo; i < hi; i++) {
            if (nums[i] < pivot) swap(i, ind++);
        }
        swap(hi, ind);
        return ind;
    };

    let swap = (a, b) => {
        [nums[a], nums[b]] = [nums[b], nums[a]];
    }

    sort(0, nums.length - 1);
    return nums;
}

console.log(sortArray([5,2,4,3]), sortArray([8]), sortArray([5,1,1,2,2,4])); // [ 2, 3, 4, 5 ] [ 8 ] [ 1, 1, 2, 2, 4, 5 ]