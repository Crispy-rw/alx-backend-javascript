const weakMap = new WeakMap();

function queryAPI(endPoint) {
  if (weakMap.has(endPoint)) {
    const value = weakMap.get(endPoint) + 1;
    if (value >= 5) throw new Error('Endpoint load is high');
    weakMap.set(endPoint, value);
  } else {
    weakMap.set(endPoint, 1);
  }
}

export { weakMap, queryAPI };
