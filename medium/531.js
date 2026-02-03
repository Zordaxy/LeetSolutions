// 531. Lonely Pixel I
// Given an m x n picture consisting of black 'B' and white 'W' pixels, return the number of black lonely pixels.
// A black lonely pixel is a character 'B' that located at a specific position where the same row and same column don't have any other black pixels.

// Find the count of lonely pixels in a given NxM document
//                {0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0},
//                {0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
//                {0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0},
//                {0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0},
//                {0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0} 

//cols             0  1  1  0  0  0  0  0  0  5  0  0  3  4  0     count: 2
//                {0}
//                {1}

                                           
var findLonelyPixel = function(matrix) {
    // Alternative:
    // set separate rows and cols arrays
    // iterate once more and check that "matrix[i][j] === "B" && rows[i] === 1 && cols[j] === 1"
    if (!matrix.length || !matrix[0].length) return 0;
    let n = matrix.length;
    let m = matrix[0].length;

    let cols = new Array(m).fill(0);
    let result = 0;
    for (let i = 0; i < n; i++) {
        let indexes = [];
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] !== "B") continue;
            indexes.push(j);
            
            if (cols[j] === 1) result--;
            cols[j]++;
        }
        if (indexes.length === 1 && cols[indexes[0]] === 1) result++;
        if (indexes.length > 1) {
            for (index of indexes) cols[index]++;
        }
    }
    return result; // 1
}
//time O(N*M)
//space O(M)