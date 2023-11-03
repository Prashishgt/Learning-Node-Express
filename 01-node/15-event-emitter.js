const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name) => {
  console.log(`Data recieved ${name}`);
});

customEmitter.on("response", () => {
  console.log(`Some other logic is recieved `);
});

customEmitter.emit("response", "John");
