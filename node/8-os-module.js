const os = require("os");

// console.log(os);
// info about current user
const user = os.userInfo();
console.log("User Info is", user);

// method that returns the system uptime in seconds
console.log("Uptime is :", os.uptime());

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log("Info about my os from node run time :\n", currentOs);
