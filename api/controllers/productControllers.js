const Products = require("../models/Products");

module.exports = {
  createProduct: async (req, res) => {
    const newProduct = await Products.create(req.body);
    try {
      await newProduct.save();
      res.status(201).json("product created successfuly");
    } catch (err) {
      console.log(err);
      res.status(500).json(`creation product failed ${err}`);
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await Products.find();
      res.status(200).json(products);
    } catch (err) {
      console.log(err);
      res.status(500).json(`getting product failed ${err}`);
    }
  },
  getProductsById: async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);
      if (!product) {
        return res.status(404).json("Product not found");
      }
      res.status(200).json(product);
    } catch (err) {
      console.log(err);
      res.status(500).json(`Getting product by ID failed: ${err}`);
    }
  },

  searchProducts: async (req, res) => {
    try {
      const result = await Products.find({ $text: { $search: req.params.key } });

      if (result.length === 0) {
        return res.status(404).json("No matching products found");
      }
      
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json(`Searching products failed: ${err}`);
    }
  },
};
