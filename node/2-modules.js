const names = require("./3-names");

const sayHi = require("./4-utils");
const data = require("./6-alternative");
require("./7-mindgrenade");

sayHi(names.john);
sayHi(names.peter);
sayHi("Prashish");
sayHi(data.singlePerson.name);

sayHi(data.items[1]);
