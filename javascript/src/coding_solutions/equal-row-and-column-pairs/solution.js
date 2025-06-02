class Solution {
  equalPairs(grid) {
    const rowCount = grid.length;
    const colCount = grid[0].length;
    const equalPairsMap = new Map();
    for (let i = 0; i < rowCount; i++) {
      let rowHash = "";
      for (let j = 0; j < colCount; j++) {
        rowHash = rowHash + '.' + grid[i][j];
      }
      const currentCount = equalPairsMap.get(rowHash);
      if (!currentCount) {
        equalPairsMap.set(rowHash, 1);
      } else {
        equalPairsMap.set(rowHash, currentCount + 1);
      }
    }
    let totalPairs = 0;
    for (let j = 0; j < colCount; j++) {
      let colHash = "";
      for (let i = 0; i < rowCount; i++) {
        colHash = colHash + '.' + grid[i][j];
      }
      const currentCount = equalPairsMap.get(colHash);
      if (currentCount) {
        totalPairs += currentCount;
      }
    }
    return totalPairs;
  }
}

const solution = new Solution();
console.log(solution.equalPairs([[11,1],[1,11]]))
