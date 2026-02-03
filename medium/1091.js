// 1091. Shortest Path in Binary Matrix
// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const size = grid.length;

  if (grid[0][0] === 1 || grid[size - 1][size - 1] === 1) return -1;
  if (size === 1) return 1;

  const visited = Array.from({ length: size }, () => Array(size).fill(null));
  let distance = 1;
  visited[0][0] = true;

  const dirs = [
    [1, 0], // right
    [-1, 0], // left
    [0, 1], // down
    [0, -1], // up
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 1],
  ];

  const queue = [[0, 0]];
  while (queue.length) {
    const queueLen = queue.length;
    distance++;
    for (let i = 0; i < queueLen; i++) {
      const node = queue.shift();
      for (margin of dirs) {
        const x = node[0] + margin[0];
        const y = node[1] + margin[1];

        if (x < 0 || y < 0 || x >= size || y >= size) continue;
        if (grid[x][y]) continue;
        if (visited[x][y]) continue;

        if (x === size - 1 && y === size - 1) {
          return distance;
        }
        visited[x][y] = true;
        queue.push([x, y]);
      }
    }
  }
  return -1;
};
