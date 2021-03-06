/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    if (!nums || k > nums.length) return null;
    // ind - index of desired el in hypotetically sorted array.
    let ind = nums.length - k;

    return quickSelect(nums, 0, nums.length - 1, ind);
};

function quickSelect(arr, start, end, ind) {
    let pivot = getPivot(arr, start, end);

    if (pivot === ind) {
        return arr[ind];
    } else if (pivot > ind) {
        return quickSelect(arr, start, pivot - 1, ind);
    } else {
        return quickSelect(arr, pivot + 1, end, ind);
    }
}

function getPivot(arr, start, end) {
    let pivot = arr[end];
    let i = start;
    let j = end - 1;

    while (i <= j) {
        while (pivot > arr[i]) i++;
        while (pivot < arr[j]) j--;

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    swap(arr, end, i);
    return i;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}


console.log(findKthLargest([3, 6, 3, 5, 2, 4, 5, 1, 2], 4)); // should be 4
// let arr = [3, 6, 3, 5, 2, 4, 5, 1, 2];
// console.log(findKthLargest([1], 1)); // should be 1