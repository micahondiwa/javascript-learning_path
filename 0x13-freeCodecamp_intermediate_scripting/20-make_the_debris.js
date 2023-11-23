/*
Return a new array that transforms the elements'
average altitude into their orbital periods.
*/

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.447;
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = function (obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    return { name: obj.name, orbPeriod: orbPeriod };
  };

  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}
