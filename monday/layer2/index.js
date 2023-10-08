// const data = require("./data");

const { readFile } = require("node:fs");
let data = readFile("db.json", "utf-8", (err, data) => {
  console.log(data);
  console.log(err);
});
console.log(data);
const printInfo = () => {
  JSON.parse(data).data.forEach((d) => {
    console.log(`User name is : ${d.name} `);
    console.log(`User age is : ${d.age} `);
  });
};
module.exports = printInfo;
