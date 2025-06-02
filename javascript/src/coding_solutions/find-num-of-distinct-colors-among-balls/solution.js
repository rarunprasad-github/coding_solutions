/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
  const colorMap = new Map();
  const ballMap = new Map();
  const result = [];

  queries.forEach((query) => {
    const [ball, color] = query;
    if (ballMap.has(ball)) {
      const prevColor = ballMap.get(ball);
      colorMap.set(prevColor, colorMap.get(prevColor) - 1);
      if (colorMap.get(prevColor) <= 0) {
        colorMap.delete(prevColor);
      }
    }
    ballMap.set(ball, color);
    colorMap.set(color, (colorMap.get(color) || 0) + 1);
    result.push(colorMap.size)
  });

  return result;
};