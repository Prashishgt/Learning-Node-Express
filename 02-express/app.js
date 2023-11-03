const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(400).send("Resource not found");
});

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});

// app.get
// app.post
// app.delete
// app.put
// app.all
// app.use
// app.listen
