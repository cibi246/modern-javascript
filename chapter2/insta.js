const var1 = ["apple","bear","citrus"];
const var2 = JSON.parse(JSON.stringify(var1));
var2[0] = "orange";
console.log("var1 => ",var1);
console.log("var2 => ",var2);
