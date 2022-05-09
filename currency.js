const data = '{ "distance": { "unit": "km", "value": 2}, "convert_to": "yd" }';
const rules = '{"imperialUnits": { "in": 25.4, "ft": 304.8, "yd": 914.4 },"metriclUnits": { "mm": 1, "cm": 10, "m": 1000, "km": 1000000}}';

function converter(data, rules) {
  const { unit, value } = JSON.parse(data).distance;
  const { convert_to } = JSON.parse(data);
  const {imperialUnits, metriclUnits} = JSON.parse(rules);

  const inputUnitIsImperial = Object.keys(imperialUnits).includes(unit);

  const multiplier = inputUnitIsImperial
    ? imperialUnits[unit] / metriclUnits[convert_to]
    : metriclUnits[unit] / imperialUnits[convert_to]
  
  if (!multiplier || !Number(value)) {
    alert("Can't convert. Please check the units");
    return
}
const result = { unit: convert_to, value: (Number(value) * multiplier).toFixed(2) };

  return console.log(JSON.stringify(result));
}

converter(data, rules);
