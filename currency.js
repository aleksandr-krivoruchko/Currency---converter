const json =
  '{ "distance": { "unit": "m", "value": 100 }, "convert_to": "ft" }';

const rule = {
  ft: { km: 3281, m: 3.281, cm: 0.032808, mm: 0.003281 },
  yd: { km: 1094, m: 1.094, cm: 0.010936, mm: 0.001094 },
  in: { km: 39370, m: 39.37, cm: 0.393701, mm: 0.03937 },
};

const imperialUnits = Object.keys(rule);
const metriclUnits = Object.keys(Object.values(rule)[0]);

function converter(json) {
  const data = JSON.parse(json);
  const { unit, value } = data.distance;
  const { convert_to } = data;
  const inputUnits = Object.keys(rule).includes(unit);
  const exitUnits = Object.keys(rule).includes(convert_to);

  let result = { unit: convert_to, value: null };

  if (
    (imperialUnits.includes(unit) && imperialUnits.includes(convert_to)) ||
    (metriclUnits.includes(unit) && metriclUnits.includes(convert_to))
  ) {
    alert("Attempt to convert in one measurement system");
    return;
  }

  if (!inputUnits && !exitUnits) {
    console.log(inputUnits);
    alert("No such unit of measure");
    return;
  }
  result.value = inputUnits
    ? (Number(value) / rule[unit][convert_to]).toFixed(2)
    : (Number(value) * rule[convert_to][unit]).toFixed(2);

  return console.log(JSON.stringify(result));
}
converter(json);
