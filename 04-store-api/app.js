require("dotenv").config();
require("express-async-errors");

const connectDB = require("./db/connect");
const productRouter = require("./routes/products");

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1><a href="/api/v1/product">Products route</a>`);
});

app.use("/api/v1/products", productRouter);
// products routes

const port = process.env.PORT || 3000;

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    // connect db
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening at ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
