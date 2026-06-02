const seg = 34;
const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
const evenYs = [-4, -2, 0, 2, 4];
const oddYs = [-3, -1, 1, 3, 5];

const coords = xCols.flatMap((x, c) => {
  const ys = c % 2 === 0 ? evenYs : oddYs;
  return ys.map(y => ({ x, y, sizeX: 2, sizeY: 2 }));
}).sort((a, b) => b.y - a.y || a.x - b.x);

const frontRowCoords = [
  { x: -9, y: 0 }, { x: -7, y: 1 }, { x: -5, y: 0 }, { x: -3, y: 1 }, 
  { x: -1, y: 0 }, { x: 1, y: 1 }, { x: 3, y: 0 }, { x: 5, y: 1 }, 
  { x: 7, y: 0 }, { x: 9, y: 1 }
];

const orderedCoords = [];
frontRowCoords.forEach(hero => {
  const found = coords.find(c => c.x === hero.x && c.y === hero.y);
  if (found) orderedCoords.push(found);
});

console.log("Ordered coords length:", orderedCoords.length);
console.log("Ordered coords:", JSON.stringify(orderedCoords));
