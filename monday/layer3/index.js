const data = require("../layer2/data");
const printCompareInfo = () => {
  let oldest = data.data[0];
  let youngest = data.data[0];
  data.data.forEach((d) => {
    if (d.age > oldest.age) {
      oldest = d;
    } else if (d.age < youngest.age) {
      youngest = d;
    }
  });
  console.log(`User ${oldest.name} is oldest, age ${oldest.age}`);
  console.log(`User ${youngest.name} is youngest, age ${youngest.age}`);
};
module.exports = printCompareInfo;
