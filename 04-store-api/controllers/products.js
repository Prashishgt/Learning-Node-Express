const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  // const products = await Product.find({});
  const products = await Product.find().sort("-name");
  res.status(200).json({ products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  // console.log(req.query);
  const { featured, company, name, sort } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured == "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  let result = await Product.find(queryObject);
  if (sort) {
    console.log(sort);
    // products = products.sort();
  }
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

console.log("I am here outside the scope");
module.exports = { getAllProducts, getAllProductsStatic };
